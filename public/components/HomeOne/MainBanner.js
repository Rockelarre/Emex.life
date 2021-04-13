import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="main-banner-content">
                                <h1>Líder en Servicios de Control de Plagas en Chile</h1>
                                <p>
                                    EMEX - Control de Plagas es una empresa nacional,
                                    entendemos el problema de las plagas en Chile
                                    desde nuestra realidad local.
                                    <br />
                                    Tenemos mucha confianza en que nuestros métodos, 
                                    desarrollados a partir de nuestra propia experiencia y
                                    conocimiento, son muy superiores a los 
                                    métodos extranjeros implementados por la competencia,
                                    que son una solución a un problema muy diferente al
                                    que nos afecta como país.
                                </p>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">Agende una Visita</a>
                                    </Link>

                                    <Link href="/contact">
                                        <a className="optional-btn">Cotice gratis con Nosotros</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="featured-services-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-robot"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Control Efectivo de Plagas</a>
                                        </Link>
                                    </h3> 
                                    <ul>
                                        <li><p>Ratones - Ratas - Guarenes - Pericotes</p></li>
                                        <li><p>Cucarachas- Termitas - Chinches - Moscas - Arañas</p></li>
                                        <li><p>Palomas - Murciélagos</p></li> 
                                    </ul>                               
                                    </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box active">
                                    <div className="icon">
                                        <i className="flaticon-artificial-intelligence"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Sanitización de Espacios Comunes</a>
                                        </Link>
                                    </h3>
                                    <ul>
                                        <li><p>Coronavirus</p></li>
                                        <li><p>Tifus</p></li>
                                        <li><p>Bacterias</p></li>
                                        <li><p>Estreptococo</p></li>
                                    </ul>                                    
                                    </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-machine-learning"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Asesorías Técnicas</a>
                                        </Link>
                                    </h3>
                                    <ul>
                                        <li><p>Control</p></li>
                                        <li><p>Prevención</p></li>
                                        <li><p>Educación</p></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;