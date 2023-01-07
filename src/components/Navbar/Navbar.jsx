import { AppBar,IconButton, Toolbar,Drawer } from '@mui/material'
import { Menu,Brightness4, Brightness7 } from '@mui/icons-material';
import React, {useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './styles';
import {Search,Sidebar} from '../constants'
import useTheme from '@mui/material/styles/useTheme';

const Navbar = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
const theme = useTheme();

const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
        {isMobile &&<IconButton
            className={classes.menuButton}
            style={{ outline: 'none' }}
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
          ><Menu />
          </IconButton>}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>

{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
</IconButton>
          <Search />
        </Toolbar>
      </AppBar>
      <div style={{ width: '320px' }}>
        <nav className={classes.drawer} style={{marginLeft:'240px'}}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawPaper }}
              ModalProps={{ keepMounted: true }}

            ><Sidebar setMobileOpen={setMobileOpen}  />
            </Drawer>
          ) : (<Drawer variant="permanent" open classes={{ paper: classes.drawPaper }}><Sidebar setMobileOpen={setMobileOpen} /></Drawer>)}
        </nav>
        </div>
    </>
  )
}

export default Navbar