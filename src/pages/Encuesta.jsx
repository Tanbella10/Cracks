import React from 'react'
import Header from '../componets/header/Header'
import portfolio from '../img/portfolio.jpg'
import Footer from '../componets/footer/Footer'
import './encuesta.css'

function Encuesta() {
  return (
    
    <div >
      <Header/>
      <div className="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div className='col-12 col-md-6'>
              <h3 className="text-white">Hola Crack!</h3>
              <small className="text-white">El objetivo de esta encuesta es recopilar sus opiniones y expectativas sobre las herramientas de aprendizaje en línea, desarrollada por y para estudiantes. Esta valiosa información nos ayudará a mejorar nuestros productos en el futuro. Muchas gracias por el tiempo dedicado a completar esta encuesta.</small>
              <div className='position-relative w-100 mt-3'>
              <a href="https://forms.office.com/r/pd3PWny9Nq" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Quiero dar mi opinion UX</a>
              </div>
            </div>
            <div className="col-md-6 text-center mb-n5 d-none d-md-block">
              <img className='img-fluid mt-5 height: 250px'  src={portfolio} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer/> 
    </div>
    
  )
}

export default Encuesta
