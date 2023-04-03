import React from 'react'
import "../style/singleProduct.css"
import { useNavigate } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";

export default function SingleProduct() {

    const navigate = useNavigate()

    const HandleCancel = (()=>{
        navigate(-1)
    })

    const product = {
        id: 1,
        name : "Dynamic Foot Raise Children",
        price: "₦7,000",
        image: "https://i.ibb.co/7rm6WD9/Dynamic-foot-raise-children.jpg"
    }

  return (
    <div className='single-product'>
        <div className="single-product-container">
            <h3 className='cancel-icon' onClick={HandleCancel}> <IoCloseSharp /></h3>
            <div className="product-img-container">
                <div className="product-img">
                    <img src={product.image} alt="" />
                </div>
            </div>
          
            <div className="product-header-dec">
                <div className="name">
                    <h4>{product.name}</h4>
                </div>
                <div className="price">
                    <h4>{product.price}</h4>
                </div>
            </div>
            <div className="product-decription">
                <div className="product-decription-content">
                    <h4>Description</h4>
                    <p>Thise product is good for all types of patr Thise product is good for all types of patr
                    Thise product is good for all types of patr Thise product is good for all types of patr
                    Thise product is good for all types of patr Thise product is good for all types of patr
                    </p>
                </div>
                <div className="cart">
                    <div className="submit">
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
