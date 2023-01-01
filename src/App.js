import React from 'react'

import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Navbar,Footer,Explore} from './components/constants'
import {Box} from '@mui/material'

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Explore />} />
      <Route path="/anime/:id"   />
      <Route path="/movie/:id"  />
      <Route path="/search/:searchTerm"   />

    </Routes>
    <Footer />
    </Box>


    </BrowserRouter>
  );
}

export default App;
