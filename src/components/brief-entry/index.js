import { Button, Paper, Typography, Box, Chip } from "@mui/material"

// "abc, efg, geh"

const BriefEntry = ({ title, tags, createdAt, onViewClick }) => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">{title}</Typography>
        <Button onClick={onViewClick} variant="outlined">View</Button>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Box>
          {
            tags.split(',').map((tag, idx) => (
              <Chip key={idx} label={`#${tag.trim()}`} sx={{ mr: 1 }} />
            ))
          }
        </Box>
        <Typography variant="subitlte2">{new Date(createdAt).toLocaleDateString()}</Typography>
      </Box>
    </Paper>
  )
}

export { BriefEntry }
