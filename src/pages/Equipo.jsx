import React from 'react'
import Header from '../componets/header/Header'
import team from '../img/team.jpg'
import taniaS from '../img/taniaS.jpeg'
import daniela from '../img/daniela.jpeg'


function Equipo() {
  return (
    <div>
      <Header/>
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="position-relative d-inline text-primary ps-4"> ⭐ ⭐ ⭐ </h6>
            <h2 className="mt-2">Integrantes del Equipo</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="d-flex">
                  <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" ></div>
                  <img className= "img-fluid rounded w-100" src={taniaS} alt="" />
                </div>
                <div className="px-4 py-3">
                  <h5 className="fw-bold m-0">Estephania Serna Galeano</h5>
                  <small>Estudiante de Ingenieria Catastral Y Geodesia</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div>
                <div>
                <img className= "img-fluid rounded w-100" src={daniela} alt="" />
                </div>
                <div className="px-4 py-3">
                  <h5 className="fw-bold m-0">Laura Daniela Guerrero</h5>
                  <small>Estudiante de Ingenieria Catastral Y Geodesia</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="team-item">
                      <div className="d-flex">
                      <img className= "img-fluid rounded w-100" src={team} alt="" />
                      </div>
                      <div className="px-4 py-3">
                      <h5 className="fw-bold m-0">Carlos German</h5>
                      <small>Profesor</small>
                      </div>
                    </div>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Equipo
