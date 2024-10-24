import React, { useState } from 'react'
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  // const [postdata,setpostdata]=useState({
  //   name:"",
  //   email:"",
  //   subject:"",
  //   message:""
  // });
  //.....change function
    // const onHandle=(e)=>{
    //   setpostdata({
    //     ...postdata,
    //     [e.target.name]:e.target.value
    //   })
    //   console.log(e.target.value)
    // }
    // //.....axios....
    // const onSubmitData=(e)=>{
    //   e.preventDefault();
    //   axios({
    //     method:"post",
    //     url:"https://jsonplaceholder.typicode.com/comments",
    //     data:"postdata"
    //   }).then((res)=>{
    //     alert(res.data)
    //   }).catch((err)=>{
    //     console.log(err)
    //   })
    // }
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_miv0dxa', 'template_wcfpqbx', e.target, 'rBepWkMHT2Judhb1P')
        .then((result) => {
            toast.success("Thankyou for submit your form");
        }, () => {
           toast.error("failed to send");
        });
    };
  return (
    <div>
      <>
    <ToastContainer/>
  {/* Page Header Start */}
  <div
    className="container-fluid page-header mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <h1 className="display-3 mb-4 animated slideInDown">Contact</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}

  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Contact
          </p>
          <h1 className="display-5 mb-4">
            If You Have Any Query, Please Contact Us
          </h1>
          <p className="mb-4">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax &amp; PHP in a few minutes. Just copy and
            paste the files, add a little code and you're done.{" "}
            <a href="https://htmlcodex.com/contact-form">Download Now</a>.
          </p>
          <form onSubmit={sendEmail} method='post'>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    name='name'
                    // onChange={onHandle}
                  
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    name='email'
                    // onChange={onHandle}
                    
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    name='subject'
                    // onChange={onHandle}
                   
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    name='message'
                    // onChange={onHandle}
                   
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary py-3 px-5" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          className="col-lg-6 wow fadeIn"
          data-wow-delay="0.5s"
          style={{ minHeight: 450 }}
        >
          <div className="position-relative rounded overflow-hidden h-100">
            <iframe
              className="position-relative w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder={0}
              style={{ minHeight: 450, border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
   {/* Back to Top */}
   <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
</>
    </div>
  )
}
