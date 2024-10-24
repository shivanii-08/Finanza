import React from 'react'

export default function Features() {
  return (
    <div>
      <>
  
  {/* Page Header Start */}
  <div
    className="container-fluid page-header mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <h1 className="display-3 mb-4 animated slideInDown">Features</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Features
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Features Start */}
  <div className="container-xxl feature py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Why Choosing Us!
          </p>
          <h1 className="display-5 mb-4">
            Few Reasons Why People Choosing Us!
          </h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <a className="btn btn-primary py-3 px-5" href="">
            Explore More
          </a>
        </div>
        <div className="col-lg-6">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <div className="row g-4">
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="feature-box border rounded p-4">
                    <i className="fa fa-check fa-3x text-primary mb-3" />
                    <h4 className="mb-3">Fast Executions</h4>
                    <p className="mb-3">
                      Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                      duo justo erat amet
                    </p>
                    <a className="fw-semi-bold" href="">
                      Read More <i className="fa fa-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="feature-box border rounded p-4">
                    <i className="fa fa-check fa-3x text-primary mb-3" />
                    <h4 className="mb-3">Guide &amp; Support</h4>
                    <p className="mb-3">
                      Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                      duo justo erat amet
                    </p>
                    <a className="fw-semi-bold" href="">
                      Read More <i className="fa fa-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
              <div className="feature-box border rounded p-4">
                <i className="fa fa-check fa-3x text-primary mb-3" />
                <h4 className="mb-3">Financial Secure</h4>
                <p className="mb-3">
                  Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                  justo erat amet
                </p>
                <a className="fw-semi-bold" href="">
                  Read More <i className="fa fa-arrow-right ms-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
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
