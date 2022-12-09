import React from "react";

const Banners = () => {
    return (
        <div className="container">
            <div className="row gx-5 mb-5">
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="images/swat.jpg" alt="Indumentaria" className="img-fluid" /></p>
                    <h4>Indumentaria</h4>
                    <p><a href="#" target="_blank" className="btn btn-dark">Ver Más</a></p>
                </div>
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="images/repuestos.jpg" alt="Repuestos" className="img-fluid" /></p>
                    <h4>Repuestos</h4>

                    <p><a href="#" target="_blank" className="btn btn-dark">Ver Más</a></p>
                </div>
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="images/accesorios.jpg" alt="Accesorios" className="img-fluid" /></p>
                    <h4>Accesorios</h4>

                    <p><a href="#" target="_blank" className="btn btn-dark">Ver Más</a></p>
                </div>
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="images/proteccion.jpg" alt="Proteccion" className="img-fluid" /></p>
                    <h4>Proteccion</h4>

                    <p><a href="#" target="_blank" className="btn btn-dark">Ver Más</a></p>
                </div>
            </div>
        </div>
    )
}

export default Banners;