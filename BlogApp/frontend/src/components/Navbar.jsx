import { AppBar, Box, Button , Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{fontFamily:'monospace'}} component="div" sx={{ flexGrow: 1 }} textAlign={'left'}>
            App Page
          </Typography>
          <Button ><Link style={{color:'goldenrod'}} to={'/add'}>Add</Link></Button>
          <Button ><Link style={{color:'goldenrod'}} to={'/view'}>View</Link></Button>
          <Button ><Link style={{color:'goldenrod'}} to={'/my'}>Myprofile</Link></Button>

          <Button color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar