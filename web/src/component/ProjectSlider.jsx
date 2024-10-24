
import React from 'react'
import Slider from "react-slick";
export default function ProjectSlider() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        loop: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

    };
    return (
        <>
            <Slider {...settings}>

                <div className="project-item pe-5 pb-5">
                    <div className="project-img mb-3">
                        <img className="img-fluid rounded" src="img/service-1.jpg" alt="" />
                        <a href="">
                            <i className="fa fa-link fa-3x text-primary" />
                        </a>
                    </div>
                    <div className="project-title">
                        <h4 className="mb-0">Financial Planning</h4>
                    </div>
                </div>
                <div className="project-item pe-5 pb-5">
                    <div className="project-img mb-3">
                        <img className="img-fluid rounded" src="img/service-2.jpg" alt="" />
                        <a href="">
                            <i className="fa fa-link fa-3x text-primary" />
                        </a>
                    </div>
                    <div className="project-title">
                        <h4 className="mb-0">Cash Investment</h4>
                    </div>
                </div>
                <div className="project-item pe-5 pb-5">
                    <div className="project-img mb-3">
                        <img className="img-fluid rounded" src="img/service-3.jpg" alt="" />
                        <a href="">
                            <i className="fa fa-link fa-3x text-primary" />
                        </a>
                    </div>
                    <div className="project-title">
                        <h4 className="mb-0">Financial Consultancy</h4>
                    </div>
                </div>
                <div className="project-item pe-5 pb-5">
                    <div className="project-img mb-3">
                        <img className="img-fluid rounded" src="img/service-4.jpg" alt="" />
                        <a href="">
                            <i className="fa fa-link fa-3x text-primary" />
                        </a>
                    </div>
                    <div className="project-title">
                        <h4 className="mb-0">Business Loans</h4>
                    </div>
                </div>

            </Slider>
        </>
    )
}
