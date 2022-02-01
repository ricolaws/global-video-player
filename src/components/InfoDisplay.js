import React from "react";
import pin from "../assets/location-pin-60.png";

function InfoDisplay({ location, views }) {
	return (
		<div className="info-display block-reveal">
			<div>
				<h2>
					<img className="pin" src={pin} width="16px"></img>
					{` ${location}`}
				</h2>
			</div>
			<div>
				<h2>{`Views: ${views}`}</h2>
			</div>
		</div>
	);
}

export default InfoDisplay;
