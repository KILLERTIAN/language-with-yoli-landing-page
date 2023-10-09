import React, { useState, useRef } from 'react';
import './CustomVideoPlayer.css'; // Import your CSS for styling

function CustomVideoPlayer({ videoSource }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showReplayButton, setShowReplayButton] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setShowReplayButton(true);
    };

    const handleReplayClick = () => {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setIsPlaying(true);
        setShowReplayButton(false);
    };

    return (
        <div className="custom-video-player">
            <video ref={videoRef} controls src={videoSource} onEnded={handleVideoEnd}></video>
            {!isPlaying && !showReplayButton ? (
                <div className="play-button" onClick={togglePlayPause}>
                    <ion-icon name="play"></ion-icon>
                </div>
            ) : null}
            {showReplayButton ? (
                <div className="replay-button" onClick={handleReplayClick}>
                    <ion-icon name="refresh"></ion-icon>
                </div>
            ) : null}
        </div>
    );
}

export default CustomVideoPlayer;
