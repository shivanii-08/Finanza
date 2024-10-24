import React from 'react'

export default function Team(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item">
                    <img className="img-fluid rounded" src={props.img} alt="" />
                    <div className="team-text">
                        <h4 className="mb-0">{props.name}</h4>
                        <div className="team-social d-flex">
                            <a className="btn btn-square rounded-circle mx-1" href=""><i
                                className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square rounded-circle mx-1" href=""><i
                                className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
