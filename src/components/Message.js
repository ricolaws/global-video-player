import React, { useState } from "react";

// Instructions for how to use the globe UI, appears after the landing page is closed.
function Message(props) {
  const [showMessage, setShowMessage] = useState(false);

  if (!props.showLanding) {
    setTimeout(() => {
      setShowMessage(true);
    }, 1600);
  }
  return (
    <React.Fragment>
      <div
        className="message"
        style={{
          opacity: showMessage ? 1 : 0,
        }}
      >
        <p> Click and drag to move the globe</p>
        <p> Scroll up or down to zoom</p>
        <p>
          Double click anywhere to see the most recent videos from that location
        </p>
      </div>
    </React.Fragment>
  );
}

export default Message;
