import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Product() {
    const location=useLocation();
  return (
    <>
      <div className="container"style={{marginTop:"10%"}}>
    <div className="row">
        <div className="col-lg-6">
    <img src={location.state.img} style={{height:"400px"}}></img>
        </div>
        <div className="col-lg-6">
        <h5><b>Id:</b>{location.state.id}</h5>
        <h3><b>Name:</b>{location.state.name}</h3>
        <p><b>Title:</b>{location.state.title}</p>
        <p><b>Description:</b>{location.state.desc}</p>
        <p><b>Price:</b>{location.state.price}$</p>
        <h6><b>Brand:</b>{location.state.brand}</h6>
        <p><b>Category:</b>{location.state.category}</p>
        <h6><b>Rating:</b>{location.state.rating}</h6>
        </div>
    </div>
      </div>
    </>
  )
}
