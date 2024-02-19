import React from 'react';
import Button from 'react-bootstrap/Button';
import about from '../img/about.jpg'
import { useState } from 'react';


function NormaList ({normas}){
    const [search,  setSearch] = useState("");

    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    const result = !normas ? norma : normas.filter((norma)=> norma.title.toLowerCase().includes("Avaluos"))
    console.log(result) 
    return (

    <div className="container-xxl position-relative p-0">

        
        {/* Service Start */} 
        <div className='container-xxl py-5'>
            <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                 <img src={about} align="right" alt="" /> 
            </div>
            <div className="container mb-2 text-muted ">
            {
                normas.map(norma =>(
                    <div key={norma.id} >
                        <br />
                        <h4 className='card-title align-items-center mb-3'>{norma.title}</h4>
                        <h4 className='text-primary'>{norma.subcategory}</h4>
                        <h4 className='text-primary'>{norma.category}</h4>
                        <h5>{norma.year}</h5>
                        <h1>{norma.vigencia}</h1>
                        <p>{norma.Resumen}</p>
                        <a className="btn px-3 mt-auto mx-auto" href={norma.link}><Button>Leer Norma</Button></a>
                        <br/>
                    </div>
                ))
            }
            </div>
        </div>
    </div>    
    )
}
export default NormaList