import React from 'react'

import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Navbar,Footer,Explore} from './components/constants'
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
      <Route path="/anime/:id"   />
      <Route path="/movie/:id"  />
      <Route path="/search/:searchTerm"   />

    </Routes>
    </main>
    <Footer />
    </div>


    </BrowserRouter>
  );
}

export default App;
