import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style/products.css'
import { Outlet } from "react-router-dom";


export default function Products() {

    const navigate = useNavigate()

    const [ product ] = useState([
        {
            id: 1,
            name : "Dynamic Foot Raise Children",
            price: "₦7,000",
            image: "https://i.ibb.co/7rm6WD9/Dynamic-foot-raise-children.jpg"
        },
        {
            id: 2,
            name : "Aeroplane Splint",
            price: "₦7,000",
            image: 'https://i.ibb.co/cx2C90C/Aeroplane-splint.jpg'
        },
        {
            id: 3,
            name : "Long Cork Up",
            price: "₦7,000",
            image: 'https://i.ibb.co/485H2Pg/Long-cork-up.jpg'
        },
        {
            id: 4,
            name : "Reciprocal Pulley",
            price: "₦7,000",
            image: 'https://i.ibb.co/TcFpJWz/Reciprocal-pulley.jpg'
        },
        {
            id: 5,
            name : "Wobby Board Local",
            price: "₦7,000",
            image: 'https://i.ibb.co/ngyNwNV/wobby-board-local.jpg'
        },
        {
            id: 6,
            name : "Sand Bag",
            price: "₦7,000",
            image: 'https://i.ibb.co/L8tjmWy/snad-bag.jpg'
        },
        {
            id: 7,
            name : "Long Cork Splint Adult",
            price: "₦7,000",
            image: 'https://i.ibb.co/yRsHgZ1/Long-cork-splint-adult.jpg'
        },
        {
            id: 8,
            name : "Cork Up Splint Adult",
            price: "₦7,000",
            image: 'https://i.ibb.co/DMhzgq0/PHY-8.jpg'
        },    
        {
            id: 9,
            name : "Long Cork Splint Adult",
            price: "₦7,000",
            image: 'https://i.ibb.co/yRsHgZ1/Long-cork-splint-adult.jpg'
        },
        {
            id: 10,
            name : "Cork Up Spring Children",
            price: "₦7,000",
            image: 'https://i.ibb.co/ggbYTJn/cork-Up-Spring-children.jpg'
        },
        {
            id: 11,
            name : "Lumber Roll",
            price: "₦7,000",
            image: 'https://i.ibb.co/cL5L5F4/Lumber-Roll.jpg'
        },
        {
            id: 12,
            name : "Sand Bag",
            price: "₦7,000",
            image: 'https://i.ibb.co/5KYDp7r/Sand-Bag.jpg'
        },
        {
            id: 13,
            name : "Posterior Limb",
            price: "₦7,000",
            image: 'https://i.ibb.co/RzkM7k7/Posterior-Limb.jpg'
        },
        {
            id: 14,
            name : "Cork Up",
            price: "₦7,000",
            image: 'https://i.ibb.co/CMdbJrV/Cork-Up.jpg'
        },
        {
            id: 15,
            name : "Aeroplane Slint",
            price: "₦7,000",
            image: 'https://i.ibb.co/p314DqF/Aeroplane-Slint.jpg'
        },
    ])

    
    const HandleRoutes = ((e)=>{
        navigate(e)
    })


  return (
        <div className='product'>
          <Outlet />
            <div className="product-container">
            { product && product.map((e)=>(
                <div key={e.id} onClick={()=>HandleRoutes('single')} className="product-top-content">
                <img src={e.image} alt="" />
                <div className="dec">
                    <div className="dec-container">
                        <div className="name">
                            <h4>{e.name}</h4>
                        </div>
                        <div className="name">
                            <h4>{e.price}</h4>
                        </div>
                    </div>
                </div>
                </div> 
            )) }
             
            </div>
            <div className="footer">
              <footer>Copyright @2023</footer>
            </div>
        </div>
      )
    }
    