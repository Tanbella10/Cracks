import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className ="navbar-brand p-0">
                    <h1 className ="m-0"><i className="fa fa-search me-2"></i>Cracks <span className="fs-5">v.0.1</span></h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="/" className="nav-item nav-link active">Inicio</a>
                    <a href="/Concetos" className="nav-item nav-link">Short Concepto</a>
                    <a href="/normas" className="nav-item nav-link">Normavita</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="/Nosotras" className="dropdown-item">Equipo</a>
                            <a href="/encuesta" className="dropdown-item">Encuesta UX</a>
                        </div>
                    </div >
                </div>
                <butaton type="button" className="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class name="fa fa-search"></i></butaton>
            </div>
          </nav>
    </div>
  )
}

export default Header
