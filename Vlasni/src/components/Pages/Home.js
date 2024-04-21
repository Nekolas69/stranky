import React from "react";
import video from '../cptlobotomy.mp4'
export const Home = () => {
    return (
      <div>
        <video src={video} width="360" height="640" controls>
        </video>
      </div>
    );
  }
  