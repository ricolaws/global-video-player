import { useState, useEffect } from "react";

// The landing page. The button that takes you to the app appears when the Google API is ready.
function LandingPage(props) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setShowButton(true);
    }, 1600);

    return () => {
      clearTimeout(timer1);
    };
  }, [props.showLanding]);

  return (
    <div
      className="container"
      style={{
        opacity: props.showLanding ? 1 : 0,
      }}
    >
      <div className="landing-msg">
        <header className="landing-msg-header">
          <h1>Side-step the algorithm</h1>
          <h1>that controls your Youtube feed.</h1>
        </header>

        <p>
          Replace your personalized stream of viral videos and monetized content
          with an open landscape of obscure, unfiltered and unseen video.
        </p>
        <p>
          This project is designed to turn the Youtube rabbit-hole inside-out.
          Giving you a borderless and unedited look at any place in the world at
          this moment in time. Just spin the globe and choose a spot, the most
          recent uploads from that location will play automatically.
        </p>
      </div>
      {props.clientIsReady ? (
        ""
      ) : (
        <div className="landing-footer">
          <button
            className="landing-button"
            onClick={props.onClose}
            style={{
              opacity: showButton ? 1 : 0,
            }}
          >
            go
          </button>
        </div>
      )}
    </div>
  );
}
export default LandingPage;
