/* global gapi */
import { useEffect, useState } from "react";

// get the videos from the youtube search API.
// videos are returned based on location coordinates.
// page token is used to get more videos when the user runs out.
function Youtube(props) {
  const [lat, lon] = props.coords;
  const [pageToken, setPageToken] = useState();

  var searchProperties = {
    part: "snippet",
    type: "video",
    order: "date",
    maxResults: 3,
    // topicId: "/m/04rlf",
    location: `${lat}, ${lon}`,
    locationRadius: "100km",
    videoEmbeddable: true,
    safeSearch: "none",
  };

  const sendVideoList = (val) => {
    props.newVideoList(val);
  };

  // ++++++++++++++++  The getVideos function  ++++++++++++++++
  function getVideos() {
    // call YouTube search API
    return gapi.client.youtube.search.list(searchProperties).then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        const listItems = response.result.items;
        const videoIdArray = [];

        if (listItems) {
          listItems.forEach((item) => {
            const videoId = item.id.videoId;
            videoIdArray.push(videoId);
          });

          // props.nextPageHandler(response.result.nextPageToken);
          setPageToken(response.result.nextPageToken);
        }
        return gapi.client.youtube.videos
          .list({
            part: ["contentDetails", "statistics", "status"],
            id: videoIdArray,
          })
          .then(
            function () {
              // send the video id's to the App component
              sendVideoList(videoIdArray);
            },
            function (err) {
              console.log(err);
              props.errorHandler();
            }
          );
      },
      function (err) {
        console.log(err);
        props.errorHandler();
      }
    );
  }

  // when the Google API has loaded and Globe has sent location coordinates call getVideos
  useEffect(() => {
    if (props.clientIsLoaded && props.coords.length) {
      console.log("getting vids");
      getVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  // when new videos are needed set the pageToken prop to the next page token and call getVideos again
  useEffect(() => {
    if (props.needMoreVideos) {
      searchProperties.pageToken = pageToken;
      getVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.needMoreVideos]);

  return null;
}

export default Youtube;
