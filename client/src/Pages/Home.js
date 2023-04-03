import React from 'react'
import './style/home.css'
import { Outlet } from 'react-router-dom'
import Medical from "./image/medical.jpg"
import one from "./image/hand exercise box.jpg"

export default function Home() {
  return (
    <div className='home'>
      <Outlet />
        <div className="home-container">
          <div className="home-top-content">
            <img src={Medical} alt="" />
          <div className="home-top-content-container">
              <h2>Adamsonic Medical And Physiotherapy Rehabilitating Equipments, Orthotics and Prosthetics Specialist.</h2>
              <button>Contact us</button>
          </div>
        </div>
        <div className="descriptopn">
          <div className="descriptopn-container">
              <div className="header">
                <h3>A division of Adamsonic Investment Limited</h3>
              </div>
              <div className="contents">
                <h4> Specialises in manufacturing of Prosthetics and Irthotics products, maufacturing, Repairs and manufacturing of medical and physiotherapy Equipments. </h4>
                <h4>Head support, Dynamic internal and External Rotators of lower limbs, Shoe raise, Adjustable Hip adductor and many more products</h4>    
              </div>
              <button>Contact us</button>
          </div>
        </div>
        <section className='Related'>
            <div className="Related-container">
                <div className="header">
                    <h3>Related Product</h3>
                </div>
            </div>
            <div className="related-images">
                <div className="contents">
                    <img src={one} alt="" />
                </div>
                <div className="contents">
                    <img src={one} alt="" />
                </div>
                <div className="contents">
                    <img src={one} alt="" />
                </div>
                <div className="contents">
                    <img src={one} alt="" />
                </div>
            </div>
        </section>

        <div className="footer">
          <footer>Copyright @2023</footer>
        </div>
        </div>
    </div>
  )
}
