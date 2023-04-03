import React from 'react'
import './style/home.css'
import Medical from "./image/medical.jpg"


export default function Contact() {
  return (
        <div className='home'>
            <div className="home-container">
              <div className="home-top-content">
                <img src={Medical} alt="" />
              <div className="home-top-content-container">
                <h1>Contact</h1>
                  <h4>Location : 82 Ibidun street Ojuelegba, <br />
              contact : 2348034004726 / 2348095117774  </h4>
                  <button>Contact us</button>
              </div>
            </div> 
            <div className="footer">
              <footer>Copyright @2023</footer>
            </div>
            </div>
        </div>
      )
    }
    