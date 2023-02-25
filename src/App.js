 import React from 'react'//rafce shortcut
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Box} from '@mui/material';
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed}from './components';
 const App = () => (
   <BrowserRouter>
   <Box sx={{backgroundColor: 'purple'}}>
      <Navbar/>
    <Routes>
                  <Route path="/" excat element={<Feed/>}/>
             <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
         <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
              </Routes>
  </Box> 
   </BrowserRouter>
 )
export default App
