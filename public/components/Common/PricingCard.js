import React, { Component } from 'react';
import Link from 'next/link';

class PricingCard extends Component {

    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="pricing-area ptb-110 bg-fafafa">
                <div className="container">
                    <div className="section-title">
                        <h2>Nuestros Planes de Precios</h2>
                        <p>Entregamos un servicio de valor con un precio justo.</p>
                    </div>

                    <div className="tab pricing-tab">
                        {/* Pricing Tab List */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                Un servicio
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                Plan Anual
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs-item">
                                <div className="row">
                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box">
                                            <div className="pricing-header">
                                                <h3>Inspección de Plagas</h3>
                                                <p>Asesorías gratuitas y <br />educación en control de plagas.</p>
                                            </div>

                                            <div className="price">
                                                $0 <span> CLP</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Servicio gratuito</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Visitas a domicilio</li>
                                                <li><i className='flaticon-tick'></i> Investigación del problema</li>
                                                <li><i className='flaticon-tick'></i> Presentación de nuestros servicios</li>
                                                <li><i className='flaticon-tick'></i> Cotizaciones gratuitas</li>
                                                <li><i className="flaticon-tick"></i> Instrucción en buenas prácticas</li>
                                                <li><i className="fas fa-times"></i> Correción de errores comunes</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Coronavirus</h3>
                                                <p>Precio desde</p>
                                            </div>

                                            <div className="price">
                                                $888 <span>/Por servicio</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Cotice con nosotros</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Ofrecemos esto...</li>
                                                <li><i className="fas fa-times"></i> No incluido...</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Roedores</h3>
                                                <p>Precio desde</p>
                                            </div>

                                            <div className="price">
                                                $888 <span>/Por servicio</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Cotice con nosotros</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Ofrecemos esto...</li>
                                                <li><i className="fas fa-times"></i> No incluido...</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Termitas</h3>
                                                <p>Precio desde</p>
                                            </div>

                                            <div className="price">
                                                $888 <span>/Por servicio</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Cotice con nosotros</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Ofrecemos esto...</li>
                                                <li><i className="fas fa-times"></i> No incluido...</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Cucarachas</h3>
                                                <p>Precio desde</p>
                                            </div>

                                            <div className="price">
                                                $888 <span>/Por servicio</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Cotice con nosotros</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Ofrecemos esto...</li>
                                                <li><i className="fas fa-times"></i> No incluido...</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Chinches</h3>
                                                <p>Precio desde</p>
                                            </div>

                                            <div className="price">
                                                $888 <span>/Por servicio</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Cotice con nosotros</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Ofrecemos esto...</li>
                                                <li><i className="fas fa-times"></i> No incluido...</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Palomas</h3>
                                                <p>Precio desde</p>
                                            </div>

                                            <div className="price">
                                                $888 <span>/Por servicio</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Cotice con nosotros</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Ofrecemos esto...</li>
                                                <li><i className="fas fa-times"></i> No incluido...</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Moscas</h3>
                                                <p>Precio desde</p>
                                            </div>

                                            <div className="price">
                                                $888 <span>/Por servicio</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Cotice con nosotros</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Ofrecemos esto...</li>
                                                <li><i className="fas fa-times"></i> No incluido...</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Arañas</h3>
                                                <p>Precio desde</p>
                                            </div>

                                            <div className="price">
                                                $888 <span>/Por servicio</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Cotice con nosotros</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Ofrecemos esto...</li>
                                                <li><i className="fas fa-times"></i> No incluido...</li>
                                            </ul>
                                        </div>
                                    </div>
                             
                                   
                                </div>
                            </div>

                            <div id="tab2" className="tabs-item">
                                <div className="row">
                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box">
                                            <div className="pricing-header">
                                                <h3>Free</h3>
                                                <p>Get your business up <br /> and running</p>
                                            </div>

                                            <div className="price">
                                                $0 <span>/Yearly</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Get Started Free</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Drag & Drop Builder</li>
                                                <li><i className='flaticon-tick'></i> Lead Generation & Sales</li>
                                                <li><i className='flaticon-tick'></i> Boot & Digital Assistants</li>
                                                <li><i className='flaticon-tick'></i> Customer Service</li>
                                                <li><i className='fas fa-times'></i> Up to 1000 Subscribers</li>
                                                <li><i className='fas fa-times'></i> Unlimited Broadcasts</li>
                                                <li><i className='fas fa-times'></i> Landing Pages & Web Widgets</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Pro</h3>
                                                <p>Get your business up <br /> and running</p>
                                            </div>

                                            <div className="price">
                                                $249 <span>/Yearly</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Cotice con nosotros</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Drag & Drop Builder</li>
                                                <li><i className='flaticon-tick'></i> Lead Generation & Sales</li>
                                                <li><i className='flaticon-tick'></i> Boot & Digital Assistants</li>
                                                <li><i className='flaticon-tick'></i> Customer Service</li>
                                                <li><i className='flaticon-tick'></i> Up to 1000 Subscribers</li>
                                                <li><i className='fas fa-times'></i> Unlimited Broadcasts</li>
                                                <li><i className='fas fa-times'></i> Landing Pages & Web Widgets</li>
                                            </ul>
                                        </div>
                                    </div>
                             
                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                        <div className="single-pricing-box">
                                            <div className="pricing-header">
                                                <h3>Premium</h3>
                                                <p>Get your business up <br /> and running</p>
                                            </div>

                                            <div className="price">
                                                $279 <span>/Yearly</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/contact">
                                                    <a className="btn btn-primary">Start 6 Days Free Trial</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-tick'></i> Drag & Drop Builder</li>
                                                <li><i className='flaticon-tick'></i> Lead Generation & Sales</li>
                                                <li><i className='flaticon-tick'></i> Boot & Digital Assistants</li>
                                                <li><i className='flaticon-tick'></i> Customer Service</li>
                                                <li><i className='flaticon-tick'></i> Up to 1000 Subscribers</li>
                                                <li><i className='flaticon-tick'></i> Unlimited Broadcasts</li>
                                                <li><i className='flaticon-tick'></i> Landing Pages & Web Widgets</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PricingCard;