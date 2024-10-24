
import React, { useState } from 'react'
import axios from 'axios';

export default function Axios() {
    const [data,setpost]=useState([]);
    axios.get("https://jsonplaceholder.typicode.com/comments").then(res=>{
       setpost(res.data)
      //  console.log(res.data)
    },[data])
  return (
    <>
   <div className='container' style={{marginTop:"10%"}}>
    <div className='row'>
      {data?.map((items)=>(
        <div className="col-lg-4 border">
          <h3>{items.postId}</h3>
            <h6>{items.id}</h6>
            <h5>{items.name}</h5>
            <h6>{items.email}</h6>
            <p>{items.body}</p>
        </div>
      ))}
    </div>
   </div>
    </>
  )
}