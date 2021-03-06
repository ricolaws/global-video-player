// import React from "react";
import VideoWindow from "./VideoWindow";
import InfoDisplay from "./InfoDisplay";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/GetWindowDimensions";

// control the Youtube API. Component renders when props.showVideo is true.
// Get an array of video IDs from App as props.videoList and set the url for the Youtube API.
// The url is passed to videoWindow as props.url.
// A counter is set so when more videos are needed the getVideos function is called automatically.
function VideoController(props) {
	const [url, setUrl] = useState("");
	const [count, setCount] = useState(0);
	const [viewCount, setViewCount] = useState(null);
	const [videoLocation, setVideoLocation] = useState(null);
	const [showButton, setShowButton] = useState(false);
	const { height, width } = useWindowDimensions();

	const nextVideo = () => {
		const nextCount = count + 1;
		if (props.videoList.ids[nextCount]) {
			setUrl(
				`https://www.youtube.com/watch?v=${props.videoList.ids[nextCount]}`
			);
			setCount(nextCount);
		}
		if (nextCount === props.videoList.ids.length) {
			console.log("more vids!");
			props.getMoreVideos(true);
			setCount(0);
		}
	};

	useEffect(() => {
		console.log(props);
		if (props.videoList) {
			setVideoLocation(props.videoList.locations[count]);
			setViewCount(props.videoList.views[count]);
		}
		return () => {
			console.log("cleanup");
		};
	}, [count]);

	useEffect(() => {
		if (props.videoList) {
			setUrl(`https://www.youtube.com/watch?v=${props.videoList.ids[0]}`);
		}
	}, [props.videoList]);

	// short delay before the buttons are visible
	setTimeout(() => {
		setShowButton(true);
	}, 1200);

	return (
		<div
			className="modal-container"
			style={{
				width: width,
				height: height,
			}}
		>
			<div className="modal-background" onClick={props.onClose}></div>
			<div className="modal-content">
				<div className="info-display-container">
					<InfoDisplay location={videoLocation} views={viewCount} />
				</div>

				<VideoWindow
					url={url}
					showVideo={props.showVideo}
					nextVideo={nextVideo}
				/>
				<footer className="footer">
					<button
						className="modal-button"
						onClick={props.onClose}
						style={{
							opacity: showButton ? 1 : 0,
						}}
					>
						Back
					</button>
					<button
						className="modal-button"
						onClick={nextVideo}
						style={{
							opacity: showButton ? 1 : 0,
						}}
					>
						Next
					</button>
				</footer>
			</div>
		</div>
	);
}

export default VideoController;
