import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import PropTypes from 'prop-types'

const drawerWidth = 8 * 40

const NavBar = ({ home, about, contact }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', paddingY: '16px' }}
    >
      <Box className='flex-1 '>
        <img src='/static/images/Logo.png' alt='mui logo' />
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              home.current.scrollIntoView({ behavior: 'smooth' })
            }}
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary='Welcome' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position='sticky' className='bg-white text-black' component='nav'>
        <Toolbar>
          <Box className='flex-1'>
            <img src='/static/images/Logo.png' alt='mui logo' />
          </Box>

          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button onClick={() => {}} key={item}>
                {item}
              </Button>
            ))} */}

            <Button
              onClick={() => {
                home.current.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                about.current.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              About
            </Button>
            <Button
              onClick={() => {
                contact?.current.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          // container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

NavBar.propTypes = {
  home: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
}

export default NavBar
