import { Box, AppBar, Toolbar, Typography } from "@mui/material"

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Diary Entry
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export { Header }
