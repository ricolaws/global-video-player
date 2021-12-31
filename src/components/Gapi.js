/* global gapi */
import { useEffect } from "react";
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

// load the Google API then set gapiIsReady to true in App
function Gapi(props) {
  useEffect(() => {
    gapi.load("client", loadClient);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadClient() {
    gapi.client.setApiKey(API_KEY);
    return gapi.client
      .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(
        function () {
          props.gapiIsReady(true);
        },
        function (err) {
          console.error("Error loading GAPI client for API", err);
        }
      );
  }

  return null;
}

export default Gapi;
