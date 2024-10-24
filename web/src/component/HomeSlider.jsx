import React from 'react'
import Slider from "react-slick";

export default function HomeSlider() {
  var settings = {
    dot: true,
    infinite: true,
    autoplay: true,
    loop: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
      <Slider {...settings}>

        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary"></i>
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <img className="rounded-circle mb-3" src="img/testimonial-1.jpg"  style={{marginLeft:"130px"}}/>
          <h4>Client Name</h4>
          <span>Profession</span> 
        </div>

        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary"></i>
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <img className="rounded-circle mb-3" src="img/testimonial-2.jpg" alt="" style={{marginLeft:"130px"}}/>
          <h4>Client Name</h4>
          <span>Profession</span>
        </div>


        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary"></i>
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <img className="rounded-circle mb-3" src="img/testimonial-3.jpg" alt="" style={{marginLeft:"130px"}} />
          <h4>Client Name</h4>
          <span>Profession</span>
        </div>


        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary"></i>
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <img className="rounded-circle mb-3" src="img/testimonial-4.jpg" alt="" style={{marginLeft:"130px"}} />
          <h4>Client Name</h4>
          <span>Profession</span>
        </div>
      </Slider>
    </>
  )
}


