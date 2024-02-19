import React from 'react'
import Header from '../componets/header/Header'

function Conceptos() {
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row text-center">
                <h1 className="display-3 fw-bold text-uppercase">Short concepts</h1>
                <div className="heading-line"></div>
                <p className="position-relative d-inline text-primary ps-4">Crack! En este espacio encontrarás cortas definiciones que necesitas antes de adentrarte en la lectura normativa.</p>
            </div>

            <div className="row mt-5">
                <div className="col-md-12">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item shadow mb-3">
                        <h2 className="accordion-header" id="headingOne" >
                            <button className= "accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ¿Cuál es la diferencia entre ley, resolución y decreto en Colombiana?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>La Constitución es la norma de normas.</strong> Allí se establece que <code>una ley</code> es una norma jurídica, establecida por el poder legislativo del país, compuesto por el Congreso de la República y la Cámara de Representantes y son de obligatorio cumplimiento.<code> Los decretos</code> es un acto administrativo y son normas jurídicas emitidas por el poder ejecutivo (presidente, ministros, gobernadores y alcaldes)
 y no requieren la aprobación del poder legislativo, su alcance es limitado.<code> La Resolución</code> sirve para reforzar las leyes.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item shadow mb-3">
                        <h2 className="accordion-header" id="headingOne" >
                            <button className= "accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ¿Qué es y cuál es el objetivo del Catastro?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Es el censo, actualizado de bienes inmuebles pertenecientes al estado.</strong> Busca administrar el inventario nacional de bienes inmuebles, de manera tal que se unifique información del territorio en su aspecto <code>Físico, jurídico, fiscal y económico.</code> De tal manera se logra el correcto recaudo  <code> IPU</code> (impuesto predial unificado) Para el desarrollo sostenible del país.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item shadow mb-3">
                        <h2 className="accordion-header" id="headingOne" >
                            <button className= "accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ¿Qué es un Avalúo?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Hace referencia al valor real de muebles y inmuebles.</strong> Un avalúo de un inmueble puede ser <code>Catastral</code>, que lo define una entidad catastral (Igac y Catastros certificados) y puede ser desarrollado de manera puntual o masiva.<code>Avalúo Comercial</code>, lo determina la oferta y la demanda del mercado inmobiliario con un año de vigencia, se genera de manera puntual y la Firma del avaluador que este afiliado a registro nacional del avaluadores. <code>Avalúo Administrativo</code>, Que es vigilado por la contraloría y se hace de manera puntual la entidad ejecutora debe realizarlo de manera obligatoria para comprar o vender un predio del estado.              </div>
                        </div>
                    </div>
                </div>
                </div> 
            </div>
        </div>
      
    </div>
  )
}

export default Conceptos
