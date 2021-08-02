import React, {useState, useEffect} from 'react';
// import { gapi } from 'gapi-script';
import Grid from '@material-ui/core/Grid';
import VideoCard from './VideoCard';
import videosmock from '../youtube-videos-mock';


export default function CardList() {

  const [videos, setVideos] = useState([]);

  function loadClient() {
    window.gapi.client.setApiKey(process.env.REACT_APP_API_KEY); 
    return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return window.gapi.client.youtube.videos.list({
      "part": [
        "id",
        "snippet"
      ],
      "chart": "mostPopular"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                setVideos({...response.result});
                console.log("Response", videos);
              },
              function(err) { console.error("Execute error", err); });
  }
  // window.gapi.load("client:auth2", function() {
  //   window.gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  // });


  useEffect(async() => {
    await loadClient().then(execute);
    
  }, [])
  
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ padding: '30px' }}
    >
      {videos.length === 0 ? <h1>Loading...</h1> : videos.items.map((video) => (
      <VideoCard videoInfo={video.snippet} key={video.etag} />
      ))}
    </Grid>
  );
}
