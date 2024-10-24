import React from 'react'
import ProjectSlider from '../component/ProjectSlider'
export default function Projects() {
  return (
    <div>
      <>


        {/* Navbar Start */}
        <div
          className="container-fluid fixed-top px-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
              <small>
                <i className="fa fa-map-marker-alt text-primary me-2" />
                123 Street, New York, USA
              </small>
              <small className="ms-4">
                <i className="fa fa-clock text-primary me-2" />
                9.00 am - 9.00 pm
              </small>
            </div>
            <div className="col-lg-6 px-5 text-end">
              <small>
                <i className="fa fa-envelope text-primary me-2" />
                info@example.com
              </small>
              <small className="ms-4">
                <i className="fa fa-phone-alt text-primary me-2" />
                +012 345 6789
              </small>
            </div>
          </div>
          <nav
            className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
              <h1 className="display-5 text-primary m-0">Finanza</h1>
            </a>
            <button
              type="button"
              className="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" className="nav-item nav-link">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Services
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle active"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu border-light m-0">
                    <a href="project.html" className="dropdown-item active">
                      Projects
                    </a>
                    <a href="feature.html" className="dropdown-item">
                      Features
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Team Member
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <div className="d-none d-lg-flex ms-2">
                <a
                  className="btn btn-light btn-sm-square rounded-circle ms-3"
                  href=""
                >
                  <small className="fab fa-facebook-f text-primary" />
                </a>
                <a
                  className="btn btn-light btn-sm-square rounded-circle ms-3"
                  href=""
                >
                  <small className="fab fa-twitter text-primary" />
                </a>
                <a
                  className="btn btn-light btn-sm-square rounded-circle ms-3"
                  href=""
                >
                  <small className="fab fa-linkedin-in text-primary" />
                </a>
              </div>
            </div>
          </nav>
        </div>
        {/* Navbar End */}
        {/* Page Header Start */}
        <div
          className="container-fluid page-header mb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <h1 className="display-3 mb-4 animated slideInDown">Projects</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Projects
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* Projects Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                Our Projects
              </p>
              <h1 className="display-5 mb-5">We Have Completed Latest Projects</h1>
            </div>
            <div
              className=" project-carousel wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <ProjectSlider />
              {/* <div className="project-item pe-5 pb-5">
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
        </div> */}
            </div>
          </div>
        </div>
        {/* Projects End */}


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
