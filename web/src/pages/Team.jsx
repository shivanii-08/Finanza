import React from 'react'

export default function Team() {
  return (
    <div>
 <>
  
  {/* Page Header Start */}
  <div
    className="container-fluid page-header mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <h1 className="display-3 mb-4 animated slideInDown">Team Member</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Team Member
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
          Our Team
        </p>
        <h1 className="display-5 mb-5">Exclusive Team</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <img className="img-fluid rounded" src="img/team-1.jpg" alt="" />
            <div className="team-text">
              <h4 className="mb-0">Kate Winslet</h4>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square rounded-circle mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square rounded-circle mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <img className="img-fluid rounded" src="img/team-2.jpg" alt="" />
            <div className="team-text">
              <h4 className="mb-0">Jac Jacson</h4>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square rounded-circle mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square rounded-circle mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <img className="img-fluid rounded" src="img/team-3.jpg" alt="" />
            <div className="team-text">
              <h4 className="mb-0">Doris Jordan</h4>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square rounded-circle mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square rounded-circle mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
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
