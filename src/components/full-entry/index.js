import { Paper, Typography, Chip, Box, Button } from "@mui/material"

// <script>

const FullEntry = ({ title, tags, notes, createdAt, onClose }) => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h5">{title}</Typography>
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
      <div dangerouslySetInnerHTML={{ __html: notes }} />
      {onClose != null && <Button onClick={onClose} variant="outlined" color="error">Close</Button>}
    </Paper>
  )
}

export { FullEntry }
