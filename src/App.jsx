import React from 'react'

import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Navbar,Footer,Explore,AnimeInformation,Watch} from './components/constants'
import {CssBaseline} from '@mui/material'
import useStyles from './styles'
function App() {
  const classes=useStyles();
  return (
    <BrowserRouter>
    <div className={classes.root}>
    <CssBaseline />
    <Navbar />
    <main className={classes.content}>

    <div className={classes.toolbar} />
    <Routes>
      <Route path="/" exact element={<Explore />} />
      <Route path="/anime/:id" element={<AnimeInformation/>}  />
      <Route path="/watch/:animeid/:epid" element={<Watch />} />
      <Route path="/search/:searchTerm"   />

    </Routes>
    </main>
    
    </div>


    </BrowserRouter>
  );
}

export default App;
