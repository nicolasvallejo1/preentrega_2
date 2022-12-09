import React from "react";

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <a href="#" className="mx-1"><img src={"images/facebook.svg"} alt={"Facebook"} width={24} /></a>
                    <a href="#" className="mx-1"><img src={"images/twitter.svg"} alt={"Twitter"} width={24} /></a>
                    <a href="#" className="mx-1"><img src={"images/instagram.svg"} alt={"Instagram"} width={24} /></a>
                    <a href="#" className="mx-1"><img src={"images/youtube.svg"} alt={"YouTube"} width={24} /></a>
                </div>
                <div className="col-md-6 d-flex justify-content-end">

                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <ul className="nav">
                
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="https://www.mcdonalds.com.ar/nosotros/contacto" target="_blank">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <p><img src="images/tactico.jpg" alt="Tactical" width="40" />  Tactical</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer;
