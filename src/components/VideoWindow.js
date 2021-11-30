import ReactPlayer from "react-player/youtube";
import { useState } from "react";

// the window that opens containing the ReactPlayer component.
// window size is monitored for responsiveness.
// the parent container width is set to zero when show window is true. an animation occurs before the player itself is visible.
function VideoWindow(props) {
  const [showWindow, setShowWindow] = useState(false);

  // monitor window size to keep video window responsive
  let width = window.innerWidth * 0.66;
  let height = width * 0.5625;
  window.addEventListener("resize", () => {
    width = window.innerWidth * 0.66;
    height = width * 0.5625;
  });

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
        width: showWindow ? width : "0",
        height: showWindow ? height : height,
      }}
    >
      <div
        className="black-box"
        style={{
          height: height,
        }}
      >
        <ReactPlayer
          className="react-player"
          style={{
            opacity: showWindow ? 1 : 0,
          }}
          url={props.url}
          controls={false}
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
