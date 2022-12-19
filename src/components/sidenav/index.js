import { ListItemText, MenuItem, MenuList, Paper } from "@mui/material"

const SideNav = ({ onMenuChange }) => {
  return (
    <Paper elevation={2} sx={{ height: '100vh', borderRadius: '0' }}>
      <MenuList>
        <MenuItem onClick={() => onMenuChange('home')}>
          <ListItemText>Homepage</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => onMenuChange('create')}>
          <ListItemText>Create</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  )
}

export { SideNav }
