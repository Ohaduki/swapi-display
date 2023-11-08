import React from 'react';
import './Loading.css';

function Loading({ message = "Loading..." }) {
  return(
    <div class="lightsaber">
    <div class="hilt">
      <div class="switch"></div>
    </div>
    <div class="plasma vader"></div>
  </div>
  )
}

export default Loading;