// import React,{useState} from 'react'


// export default function UseStatehook() {
    // const[data,setdata]=useState(" This is use state hook")
    // const UpdateState=()=>{
    //     let a= "My name is shivani"
    //     setdata(a)
    //     if(a==='This is use state hook'){
    //       setdata('My name is shivani')
    //     }else{
    //       setdata('This is use state hook')
    //     }
    // }
   
  //   const[data,setdata]=useState(0);
  //   const increment=()=>{
  //       let a= data+1;
  //       setdata(a)
  //   }
  //   const decrement=()=>{
  //       let b = data-1;
  //       setdata(b)
  //   }
  // return (
  //   <>
  //   {/* <div style={{marginTop:"20%"}}>
  //     <h2>{data}</h2>
  //     <button onClick={UpdateState}>Click me</button>
  //   </div> */}
  //   <div style={{marginTop:"10%"}}>
  //   <button onClick={increment}>+</button>
  //   <h1>{data}</h1>
  //   <button onClick={decrement}>-</button>
  //   </div>
  //   </>
  // )
  // }


  import React, { useState } from 'react'
         
  export default function UseStatehook() {
    const[img,setimg]=useState(<img class=" position-relative rounded "src="img/service-4.jpg" alt="" style={{padding:"20%", borderRadius:"50%"}}/>)
    const ChangeState=()=>{
      let a=(<img class=" position-relative rounded "src="img/service-4.jpg"alt="" style={{padding:"20%", borderRadius:"50%"}}/>)
      setimg(a)
    }
    const StateChange=()=>{
      let b=(<img class=" position-relative rounded "src="img/team-2.jpg" alt="" style={{padding:"20%", borderRadius:"50%"}}/>)
      setimg(b)
    }
    return (
      <>
        <div style={{marginTop:"10%"}}>
          
          <button style={{backgroundColor:"blue",color:"white",border:"none",margin:"5px", marginTop:"5%",padding:"20px 50px", borderRadius:"10px", fontSize:"30px" }}onClick={ChangeState}>Hello</button>
      <button style={{backgroundColor:"blue",color:"white",border:"none",display:"block", margin:"5px",padding:"20px 50px", borderRadius:"10px", fontSize:"30px"}} onClick={StateChange}>Hey</button>
      <div style={{marginTop:"-20%", width:"70%", marginLeft:"30%"}}>
      <p style={{backgroundColor:"blue",borderRadius:"60%", borderWidth:"10%"}}>{img}</p>
          </div>
          </div>
        
      </>
    )
  }

  
  
  