import React from 'react'

export default function About() {
  return (
    <div>
      <>
 {/* Page Header Start */}
 <div
    className="container-fluid page-header mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <h1 className="display-3 mb-4 animated slideInDown">About</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
 {/* About Start */} 
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4 align-items-end mb-4">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <img className="img-fluid rounded" src="img/about.jpg" />
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            About Us
          </p>
          <h1 className="display-5 mb-4">
            We Help Our Clients To Grow Their Business
          </h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="border rounded p-4">
            <nav>
              <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                <button
                  className="nav-link fw-semi-bold active"
                  id="nav-story-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-story"
                  type="button"
                  role="tab"
                  aria-controls="nav-story"
                  aria-selected="true"
                >
                  Story
                </button>
                <button
                  className="nav-link fw-semi-bold"
                  id="nav-mission-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-mission"
                  type="button"
                  role="tab"
                  aria-controls="nav-mission"
                  aria-selected="false"
                >
                  Mission
                </button>
                <button
                  className="nav-link fw-semi-bold"
                  id="nav-vision-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-vision"
                  type="button"
                  role="tab"
                  aria-controls="nav-vision"
                  aria-selected="false"
                >
                  Vision
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-story"
                role="tabpanel"
                aria-labelledby="nav-story-tab"
              >
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore.
                </p>
                <p className="mb-0">
                  Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et
                  eos labore. Clita erat ipsum et lorem et sit
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="nav-mission"
                role="tabpanel"
                aria-labelledby="nav-mission-tab"
              >
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore.
                </p>
                <p className="mb-0">
                  Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et
                  eos labore. Clita erat ipsum et lorem et sit
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="nav-vision"
                role="tabpanel"
                aria-labelledby="nav-vision-tab"
              >
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore.
                </p>
                <p className="mb-0">
                  Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et
                  eos labore. Clita erat ipsum et lorem et sit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="row g-4">
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100">
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-times text-white" />
                </div>
                <div className="ps-3">
                  <h4>No Hidden Cost</h4>
                  <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                </div>
                <div className="border-end d-none d-lg-block" />
              </div>
              <div className="border-bottom mt-4 d-block d-lg-none" />
            </div>
          </div>
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div className="h-100">
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-users text-white" />
                </div>
                <div className="ps-3">
                  <h4>Dedicated Team</h4>
                  <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                </div>
                <div className="border-end d-none d-lg-block" />
              </div>
              <div className="border-bottom mt-4 d-block d-lg-none" />
            </div>
          </div>
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100">
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-phone text-white" />
                </div>
                <div className="ps-3">
                  <h4>24/7 Available</h4>
                  <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */} 
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
