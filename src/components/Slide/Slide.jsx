import React from 'react';
import logo from './frontImage.jpg'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Slider() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Slider;