import React from 'react'
import {Box,CardContent,CardMedia,Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoChannelUrl, demoProfilePicture,demoChannelTitle, demoVideoUrl } from '../utils/constants';
const ChannelCard = ({channelDetail:{
  snippet}}) => {
    return (
      <Box sx={{width:{md:'320px',xs:'100%'},
      boxShadow:'none',borderRadius:12}}>
          <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:
          demoVideoUrl}>
          <CardMedia 
          image={snippet?.thumbnails?.medium?.url}
          alt={snippet?.channelTitle}
          sx={{width:319,height:180}}/>
  </Link>
  <CardContent sx={{backgroundColor:"white",
  height:'106x'}}>
    <Link to={snippet?.channelId?`/channel/${snippet?.ChannelCardchannelId}`:
  demoChannelUrl}>
    <Typography variant="subtitle"
    fontWeight="bold" color="black">
      {snippet?.title.slice(0,60)||
      demoChannelTitle.slice(0,60)}
    </Typography>
    </Link>
  </CardContent>
      </Box>
    )
  }
  
  
  export default ChannelCard
  
