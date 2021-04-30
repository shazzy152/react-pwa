import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './App.css';

function App() {

  document.addEventListener("DOMContentLoaded", () => {

    const lemonConnect = document.getElementById("lemonConnect");
    lemonConnect.addEventListener("click", clickConnect);

    const orangeConnect = document.getElementById("orangeConnect");
    orangeConnect.addEventListener("click", clickConnect);

    const splashConnect = document.getElementById("splashConnect");
    splashConnect.addEventListener("click", clickConnect);

    const flowerConnect = document.getElementById("flowerConnect");
    flowerConnect.addEventListener("click", clickConnect);

    const notSupported = document.getElementById('notSupported');
    notSupported.classList.toggle('hidden', 'serial' in navigator);
  });

  async function connect() {
    console.log('estabilishing connection...')
    const port = await navigator.serial.requestPort();
    await port.open({ baudrate: 9600 });
  }

  async function clickConnect() {
    await connect();
  }

  return (
    <div className="main">

      <div id="notSupported" class="hidden">
        Sorry, <b>Web Serial</b> is not supported on this device, make sure you're 
        running Chrome 78 or later and have enabled the 
        <code>#enable-experimental-web-platform-features</code> flag in
        <code>chrome://flags</code>
      </div>

      <div className="top">
      <div className="arrow">
        <div className="svg-wrap">
          <svg className="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="menu">
        <LazyLoadImage src={process.env.PUBLIC_URL + '/assets/icon-two.PNG'} 
        className="menu-img" 
        alt="menu" />
      </div>
      <div className="logo">
        <LazyLoadImage src={process.env.PUBLIC_URL + '/assets/logo.PNG'} 
        className="logo-img" 
        alt="logo" />
      </div>
      </div>
      <div className="container">
          <h1 className="h-one">LIKED IT!</h1>
          <h1 className="h-two">Let's try some more<br></br>fragrance options</h1>
            <div className="lemon" id="lemonConnect" >
              <LazyLoadImage src={process.env.PUBLIC_URL + '/assets/lemon.png'} 
              className="lemon-img"
              alt="lemon"
              />
            </div>
            <div className="orange" id="orangeConnect" >
              <LazyLoadImage src={process.env.PUBLIC_URL + '/assets/orange.png'} 
              className="orange-img"
              alt="orange"
              />
            </div>
            <div className="splash" id="splashConnect" >
              <LazyLoadImage src={process.env.PUBLIC_URL + '/assets/splash.png'} 
              className="splash-img"
              alt="splash"
              />
            </div>
            <div className="flower" id="flowerConnect" >
              <LazyLoadImage src={process.env.PUBLIC_URL + '/assets/flower.png'} 
              className="flower-img"
              alt="flower"
              />
            </div>
          <h1 className="h-three">Not just FRAGNANCE FRESH</h1>
          <h1 className="h-four">but now get your<br></br>laundry</h1>
          <h1 className="h-five">refreshed</h1>
          <h1 className="h-six">with steam</h1>
      </div>
    </div>
  );
}

export default App;
