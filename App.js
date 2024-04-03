import React from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './App.css';
const src="Video by Curtis Adams from Pexels: https://www.pexels.com/video/interior-design-of-a-modern-house-3773486/";
function App() {
  return(
     
    <div className='Box'>
      <div className='head'>      
        <header>
		    <div className="logo">Hom</div>
		    <div className="nav-bar"> 
			    <ul>
				    <li><a href="#home">About</a></li>
				    <li><a href="#About">Location</a></li>
				    <li><a href="#Recipe">service</a></li>
				    <li><a href="#Contact">Contact</a></li>
			    </ul>
		    </div>
        <div className='btns'>
          <button className='btnone'>Login</button>
          <button className='btntwo'>Sign Up</button>
        </div>
	      </header>
      </div>

      <div className='body'>
        <div className='left'>
          <h1>Find Your <br></br>Perfect Home</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className='btnonenew'>Explore</button>
          <button className='btntwonew'>Contact Us</button>
        </div>
        <div className='right'>
          <img src='C:\Users\Irfhana\Downloads\housenew.jpeg' alt=''></img>
          <div className='right-new'>
            <h3>Live a life with sweet ones</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className='=arrow'>
              <button className='roundone'></button>
              <button className='roundtwo'></button>
              <button className='roundthree'></button>
              <button className='bi bi-arrow-left'></button>
              <button className='bi bi-arrow-right'></button>
              
            </div>
          </div>
        </div>
      </div>

      <div className='body-two'>
        <div className='movie'>
          
          <video controls width="1270" height="400">
            <source src={src} type="video/mp4" />
            
      Sorry, your browser doesn't support videos.
          </video>
          <h3>Our Pleasure to Serve You</h3>
          <h1>We Have Discovered Around The<br></br> World to Help Family</h1>
          <p>We Specialize in helping you find a cozy and inviting living space that suits your lifestyle. Our <br></br>streamlined platforms offers a hassle-free search experience, Presenting a range of comfortable <br></br>houses with all the amenties you need. Your next level of comfort awaits at comfortable house.</p>
          <div className='sponsers'>
            <ul>
              <li><i class="fa-brands fa-airbnb"></i>airbnb</li>
              <li>trivago</li>
              <li>Expedia</li>
              <li>HSBC</li>
            </ul>
          </div>
          <button className='btnone-bottom'><b>Discover</b></button>
          <button className='btntwo-bottom'><b>Our Recommend</b></button>

        </div>


      </div>

      
    </div>
    
  )
}
export default App;




