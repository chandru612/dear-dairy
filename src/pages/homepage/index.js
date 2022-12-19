import {useEffect, useState} from 'react'
import {Box, Button, CircularProgress, Modal, Stack, Typography} from "@mui/material"
import {StorageService} from '../../services/storage'
import {BriefEntry} from '../../components/brief-entry'
import {FullEntry} from '../../components/full-entry'
import EntriesFilters from "../../components/filter";

const Homepage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [loading, setLoading] = useState(false)
  const [allEntries, setAllEntries] = useState([])
  const [selectedEntries, setSelectedEntries] = useState([])
  const [allTags, setAllTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  const fetchEntries = () => {
    setLoading(true)
    const allEntries = StorageService.fetchAllEntries()
    setTimeout(() => {
      setAllEntries(allEntries)
      setAllTags(allEntries.flatMap(entry => entry.tags.split(',')))
      setSelectedEntries(allEntries)
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  const getFilteredTags = () => {
    return allEntries.flatMap(entry => entry.tags.split(','))
  }

  return (
    <>
      <Stack direction="column" spacing={2}>
        <Typography variant="h2">All Entries</Typography>
        <Typography variant="caption">Filters</Typography>
        <Stack direction="row" spacing={2} justifyContent={"start"} alignContent={"start"}>
          <EntriesFilters names={ allTags } onSelectedTags={ (tags) => {
            setSelectedTags(tags)
            setAllEntries(allEntries)
          }}/>
          <Button sx ={{height: "50px"}} variant="contained" onClick={() => {
            const filteredEntries = []
            allEntries.forEach((entry) => {
              const tagList = entry.tags.split(',')
              const isMatchingTagFound = tagList.filter(filteredTag => selectedTags.some(tag => filteredTag === tag)).length > 0
              if(isMatchingTagFound) {
                filteredEntries.push(entry)
                setSelectedEntries(filteredEntries)
              }
            });
          } }>Search</Button>
        </Stack>
        {
          loading ? <CircularProgress /> : selectedEntries.map(entry => (
            <BriefEntry
              title={entry.title}
              tags={entry.tags}
              createdAt={entry.createdAt}
              onViewClick={() => {
                setOpenModal(true)
                setSelectedEntry(entry)
              }}
            />
          ))
        }
      </Stack>
      <Modal open={openModal}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
          <Box sx={{ width: "100%", maxWidth: "80vw" }}>
            {selectedEntry != null && (
              <FullEntry
                title={selectedEntry.title}
                tags={selectedEntry.tags}
                notes={selectedEntry.notes}
                createdAt={selectedEntry.createdAt}
                onClose={() => setOpenModal(false)}
              />
            )}
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export { Homepage }
