import React from 'react'

function Botones({categori, filtercategory}) {
  return (
    
    <div className="categories">
      <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">En este espacio encuentras las normas más relevantes, aprobadas en pénsum</h6>
                    <h2 className="mt-2">Consulta Normativa </h2>
                </div>
                <div className="row g-4">
                    <div className="wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            {/* <h5 className="mb-3">SEO Optimization</h5> */}
                               <p>El criterio de categoría solo hace referencia a las materias de ingeniería aplicada.</p>
                            <a className="btn btn-primary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft" href='/normas'>Todas las Normas</a>
                            {categori.map(category => (
                              <button className="btn px-3 pe-4 active" type="button" onClick={()=> filtercategory(category)} key={category}>
                            {category}
                            </button> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>  
  </div>
  )
}

export default Botones


