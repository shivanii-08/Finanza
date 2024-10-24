import React from 'react'
import { useSelector } from 'react-redux'
import CARDDATA from '../Reducer/reducer'
export default function Productdetails() {
    const mydata=useSelector((state)=>state.CARDDATA)
  return (
    <>
    <div className='container' style={{marginTop:"10%"}}>
        <div className='row'>
        {mydata?.map((user)=>(
            <div>
               <img src={user.cardData.image} alt="" style={{height:"400px"}}/>
               <h1>{user.cardData.id}</h1>
               <h2>{user.cardData.name}</h2>
               <p>{user.cardData.title}</p>
               <p>{user.cardData.description}</p>
               <h5>{user.cardData.price}$</h5>
            </div>
        ))}
        </div>

    </div>
      
    </>
  )
}
