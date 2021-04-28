import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './App.css';

function App() {

  return (
    <div className="main">
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
            <div className="lemon">
              <LazyLoadImage src={process.env.PUBLIC_URL + '/assets/lemon.png'} 
              className="lemon-img"
              alt="lemon"
              />
            </div>
            <div className="orange">
              <LazyLoadImage src={process.env.PUBLIC_URL + '/assets/orange.png'} 
              className="orange-img"
              alt="orange"
              />
            </div>
            <div className="splash">
              <LazyLoadImage src={process.env.PUBLIC_URL + '/assets/splash.png'} 
              className="splash-img"
              alt="splash"
              />
            </div>
            <div className="flower">
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
