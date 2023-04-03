import React from 'react'
import './style/home.css'
import { Outlet } from 'react-router-dom'
import Medical from "./image/medical.jpg"

export default function About() {
  return (
        <div className='home'>
            <Outlet />
            <div className="home-container">
              <div className="home-top-content">
                <img src={Medical} alt="" />
              <div className="home-top-content-container">
                <h1>About</h1>
                  <h4>Adamsonic Medical and Physiotherapy Rehabilitation Equipment service has over 25yrs experience in production of prosthesis and orthosis
                gadgets, repair and creating specilized medical and Physiotherapy equipments. 
                
                Our products are specifically designed by high stsandard professionals to produce expected results with the comfort and result in mind.
                
                We also specilized in producing bespoke equipment to fit to every special need of our clients with special request. 

                We also provide consultation service in and around Lagos. Across the country, We are the best with our experience and results speaking for us over the years.
                .</h4>
                  <button>Contact us</button>
              </div>
            </div> 
            <div className="footer fuuter">
              <footer>Copyright @2023</footer>
            </div>
            </div>
        </div>
      )
    }
    