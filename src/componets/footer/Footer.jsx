import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
       {/*  <!-- Footer Start --> */}
        <div className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">   
                    <h5 className="text-white mb-4">Danos tu opinión</h5>
                        <p><i className="fa fa-envelope me-3"></i>taeserna@udistrtal.edu.co</p>
                        <p><i className="fa fa-envelope me-3"></i>ldguerreroc@udistrital.edu.co</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                &copy; <a className="border-bottom" href="#">Craks Site V 0.0.1</a>, All Right Reserved. 
							Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                </div>
            </div>
        </div>
        
  )
}

export default Footer
