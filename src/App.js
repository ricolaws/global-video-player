import React, { useState } from "react";
import ReactDOM from "react-dom";
import Globe from "./components/Globe";
import Gapi from "./components/Gapi";
import Youtube from "./components/Youtube";
import VideoController from "./components/VideoController";
import LandingPage from "./components/LandingPage";
import Message from "./components/Message";
require("dotenv").config();

console.log(process.env.REACT_APP_API_KEY);
function App() {
  const [clientIsLoaded, setClientIsLoaded] = useState(false);
  const [coords, setCoords] = useState([]);
  const [videoList, setVideoList] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [noVideos, setNoVideos] = useState(false);
  const [needMoreVideos, setNeedMoreVideos] = useState(false);

  function gapiIsReadyHandler(value) {
    setClientIsLoaded(value);
    console.log("GAPI client loaded for API");
  }

  const setCoordsHandler = (value) => {
    setCoords(value);
  };

  const errorHandler = (error) => {
    setNoVideos(true);
    setShowVideo(false);
    console.log(error);
  };

  const newVideoListHandler = (value) => {
    setVideoList(value);
    setShowVideo(true);
    setNeedMoreVideos(false);
  };

  const getMoreVideos = (condition) => {
    setNeedMoreVideos(condition);
  };

  const showVideoHandler = (condition) => {
    setShowVideo(condition);
  };

  const showLandingHandler = (condition) => {
    setShowLanding(condition);
  };

  return (
    <div>
      <LandingPage
        showLanding={showLanding}
        clientIsLoaded={clientIsLoaded}
        onClose={() => showLandingHandler(false)}
      />
      <Gapi gapiIsReady={gapiIsReadyHandler} />
      <Message showLanding={showLanding} />
      <Youtube
        clientIsLoaded={clientIsLoaded}
        coords={coords}
        errorHandler={errorHandler}
        newVideoList={newVideoListHandler}
        needMoreVideos={needMoreVideos}
      />
      {!showVideo ? null : (
        <VideoController
          noVideos={noVideos}
          showVideo={showVideo}
          onClose={() => showVideoHandler(false)}
          videoList={videoList}
          getMoreVideos={getMoreVideos}
        />
      )}

      <Globe setCoords={setCoordsHandler} showLanding={showLanding} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
