import React from 'react';
import {Link} from "react-router-dom";
import { Typography ,Card,CardContent,CardMedia} from '@mui/material';
import { CheckCircle, VideoCallSharp } from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants';
const VideoCard = ({video:{id:{videoId},
snippet}}) => {
  return (
    <Card sx={{width:{xs:'100%',sm:'358px', md:'320px',xs:'100%'},
    boxShadow:'none',borderRadius:0}}>
        <Link to={videoId?`/video/${videoId}`:
        demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:{
          xs:'100%' ,sm:358, md:'320px'},
          height:180}}/>
</Link>
<CardContent sx={{backgroundColor:"white",
height:'106x'}}>
  <Link to={videoId?`/video/${videoId}`:
demoVideoUrl}>
  <Typography variant="subtitle1"
  fontWeight="bold" color="black">
    {snippet?.title.slice(0,60)||
    demoVideoTitle.slice(0,60)}
  </Typography>
  </Link>
<Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
  <Typography variant='subtitle2'
  fontweight="bold" color="black">
    {
      snippet?.channelTitle||demoChannelTitle
    }
    <CheckCircle sx={{fontSize:12,color:'black',ml:'5px'}}/>
  </Typography>
  <Link to={snippet?.publishedAt?`/video/${snippet?.publishedAt}`:demoChannelUrl}></Link>
</Link>
</CardContent>
    </Card>
  )
}


export default VideoCard
