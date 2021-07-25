import React from 'react'
import VideoCard from './VideoCard'
import Grid from '@material-ui/core/Grid'
import videos from '../youtube-videos-mock'

export default function CardList() {

    return (
        <Grid container justifyContent="center" alignItems="center" style={{padding: '30px'}} >
        {videos.items.map(video => (
            <VideoCard videoInfo={video.snippet} key={video.etag}/>
        ))}
     
        </Grid>
    )
}
