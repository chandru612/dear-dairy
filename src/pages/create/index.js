import ReactQuill from 'react-quill';
import { Button, Stack, TextField, Typography } from "@mui/material"
import { useState } from 'react';
import { StorageService } from "../../services/storage"

const Create = () => {
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [notes, setNotes] = useState('')

  const submit = () => {
    // validate the data
    StorageService.addEntry(title, tags, notes)
    // notification
    reset()
    // redirect
  }

  const reset = () => {
    setTitle('')
    setTags('')
    setNotes('')
  }

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h4">Create new entry</Typography>
      <TextField
        placeholder="Enter title"
        sx={{ width: "50%" }}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <TextField
        placeholder="Enter comma-separated tags"
        sx={{ width: "50%" }}
        value={tags}
        onChange={e => setTags(e.target.value)}
      />
      <ReactQuill theme="snow" value={notes} onChange={setNotes}/>
      <Stack direction="row" spacing={2}>
        <Button onClick={submit} variant="contained" color="primary">Submit</Button>
        <Button onClick={reset} variant="outlined" color="error">Reset</Button>
      </Stack>
    </Stack>
  )
}

export { Create }
