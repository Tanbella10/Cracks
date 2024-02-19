import {useState} from 'react'
import 'bootstrap' 
import Header from '../componets/header/Header'
import './normaPage'
import './homePage.css'
import about from '../img/newsletter.png'
import Footer from '../componets/footer/Footer'
import ObjetivoPage from './ObjetivoPage'


function HomePage(){
    return (
         /* Navbar & Hero Start */ 
        <div className="container-xxl position-relative p-0">
            <Header/>
            <div className="container-xxl py-5 bg-primary hero-header mb-5">
                <div className="container my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated zoomIn">“Todas las fronteras son convenciones que esperan ser superadas.”</h1>
                            <p className="text-white pb-3 animated zoomIn">La Presente Página, es una herramienta de consulta normativa por y para estudiantes de ingeniería catastral y Geodesia.</p>
                            <a href="#" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Empezar</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className='img-fluid' src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ObjetivoPage/>
            <Footer/>
        </div>

    )
}

export default HomePage