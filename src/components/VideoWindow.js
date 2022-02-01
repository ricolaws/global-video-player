import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/GetWindowDimensions";

// the window that opens containing the ReactPlayer component.
// window size is monitored with useWindowDimensions hook and an animation occurs before the player itself is visible.
function VideoWindow(props) {
  const [showWindow, setShowWindow] = useState(false);
  const { height, width } = useWindowDimensions();
  // const [fullScreen, setFullScreen] = useState(1);
  const [vDimensions, setVDimensions] = useState({
    w: width,
    h: height,
  });

  // monitor window size to keep video window responsive. set larger size on smaller screen.
  useEffect(() => {
    if (width > 880) {
      setVDimensions({ w: width * 0.75, h: width * 0.75 * 0.5625 });
    }
    if (width <= 880) {
      setVDimensions({ w: width, h: width * 0.5625 });
    }

    // if (width < 880 && width > height) {
    //   console.log("landscape")
    //   setFullScreen(0)
    // } else if (width < 880 && width < height) {
    //   console.log("portrait")
    //   setFullScreen(1)
    // }
  }, [width, height]);

  const openVideoWindow = () => {
    setTimeout(() => {
      setShowWindow(true);
    }, 600);
  };

  if (props.showVideo) {
    openVideoWindow();
  }

  return (
    <div
      className="pop-open"
      style={{
        width: showWindow ? vDimensions.w : "0",
        height: showWindow ? vDimensions.h : "0",
      }}
    >
      <div
        className="black-box"
        style={{
          height: vDimensions.h,
        }}
      >
        <ReactPlayer
          className="react-player"
          style={{
            opacity: showWindow ? 1 : 0,
          }}
          url={props.url}
          config={{
            youtube: {
              playerVars: { autoplay: 1, fs: 1, playsinline: 1, iv_load_policy: 3, rel:0 },
            },
          }}
          controls={true}
          playing={true}
          onEnded={props.nextVideo}
          onError={props.nextVideo}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default VideoWindow;
