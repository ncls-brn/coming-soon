import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import Video from "../src/assets/video.mp4";
import "./styles.css";

const App = () => {
  return (
    <section className="page">
      <div className="overlay"></div>
      <video src={Video} autoPlay loop muted></video>
      <div className="page__content">
        <h1>Coming Soon</h1>
        <h3>Come back at the end of the countdown for the surprise !</h3>
        <FlipClockCountdown
          to={new Date().getTime() + 72 * 3600 * 1000 + 5000}
          className="flip-clock"
        />
        ;
      </div>
    </section>
  );
};

export default App;
