import React, { Component } from 'react';

class AboutContact extends Component {
    render() {
        return (
            <section className="about-area ptb-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about/tecnico1.png" alt="image" />
                                {/* <img src="/images/about/about2.jpg" alt="image" /> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2>Nuestra Propuesta</h2>
                                <p>
                                Entregamos un servicio de excelencia, garantizando la satisfacción de nuestros clientes. Comprometiéndonos con las necesidades reales y urgentes de quienes nos escogen como su empresa controladora de plagas.
                                </p>
{/*                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
 */}                            </div>
                        </div>
                    </div>

                    <div className="about-inner-area"> 
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Quiénes somos</h3>
                                    <p>
                                        

Somos un equipo de profesionales a la vanguardia en el control integrado de plagas urbanas, con una vasta experiencia en el rubro y una constante actualización de tecnologías para un perfecto desempeño.
<br />
<br />
Manejamos el concepto de control integrado de plagas desde la base de la responsabilidad social y ambiental, con un claro enfoque en nuestro entorno.

                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Misión</h3>
                                    <p>
                                    Ser responsables en la entrega de soluciones efectivas, otorgando servicios de calidad superior. 
                                    <br />
                                    <br />
                                    Lográndolo gracias al trabajo de un equipo multidisciplinario y competente, quienes poseen los conocimientos y herramientas necesarias para entregar confianza y seguridad a nuestros clientes. 
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="about-text">
                                    <h3>Visión</h3>
                                    <p>
                                    Queremos ser promotores de ideas innovadoras, logrando un correcto equilibrio ecosistémico, contribuyendo a mejorar el medio ambiente y otorgar así un impacto positivo en la calidad de vida de nuestros clientes y en nuestro entorno. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img1">
                    <img src="/images/shape/shape1.png" alt="image" />
                </div>
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.svg" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.svg" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/shape6.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot2.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default AboutContact;