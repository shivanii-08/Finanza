import React from 'react'
import HomeSlider from '../component/HomeSlider'
export default function Testimonial() {
  return (
    <div>
      <>
  
  {/* Page Header Start */}
  <div
    className="container-fluid page-header mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <h1 className="display-3 mb-4 animated slideInDown">Testimonial</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Testimonial
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
          Testimonial
        </p>
        <h1 className="display-5 mb-5">What Our Clients Say!</h1>
      </div>
      <div
        className="testimonial-carousel wow fadeInUp"
        data-wow-delay="0.3s"
      > <HomeSlider/>
         {/* <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
            dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
            tempor diam tempor erat.
          </div>
          <img
            className="rounded-circle mb-3"
            src="img/testimonial-1.jpg"
            alt=""
          />
          <h4>Client Name</h4>
          <span>Profession</span>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
            dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
            tempor diam tempor erat.
          </div>
          <img
            className="rounded-circle mb-3"
            src="img/testimonial-2.jpg"
            alt=""
          />
          <h4>Client Name</h4>
          <span>Profession</span>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
            dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
            tempor diam tempor erat.
          </div>
          <img
            className="rounded-circle mb-3"
            src="img/testimonial-3.jpg"
            alt=""
          />
          <h4>Client Name</h4>
          <span>Profession</span>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
            dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
            tempor diam tempor erat.
          </div>
          <img
            className="rounded-circle mb-3"
            src="img/testimonial-4.jpg"
            alt=""
          />
          <h4>Client Name</h4>
          <span>Profession</span>
        </div> */}
    </div>
    </div>
  </div>
  {/* Testimonial End */}
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
