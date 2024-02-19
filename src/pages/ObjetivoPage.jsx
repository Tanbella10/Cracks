import React from 'react'
import Header from '../componets/header/Header'
import morado from '../img/morado.png'
import './style.css'


function ObjetivoPage() {
  return (
    <div >
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="row g-5">
                <div className="col-lg-6">
                    <div className="video-box">
                    <img className='img-fluid wow zoomIn' data-wow-delay="0.5s" src={morado} alt="video illutration" />
                     <span class="border-animation border-animation--border-1"></span>
                    <span class="border-animation border-animation--border-2"></span>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="section-title position-relative mb-4 pb-2">
                        <h6 className="position-relative text-primary ps-4">...</h6>
                        <h2 className="mt-2">Nuetro Objetivo</h2>
                    </div>
                        <p className="lh-lg">Conceptualizar, diseñar e implementar una plataforma web para el registro, administración y consulta de
normativas relacionadas con la Ingeniería Catastral Y Geodesia.</p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <h6 className= "mb-3"><i className="fa fa-check text-primary me-2"></i>Concetualización</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Diseño</h6>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Implementación</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Evaluación</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ObjetivoPage
