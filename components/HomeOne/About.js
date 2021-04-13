import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area ptb-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                
                                {/* <Link  href="https://cianware.com"> */}
                                    <img src="/images/about/pexels-maitree-rimthong-1602726.jpg" alt="image" />
                                {/* </Link> */}
                                {/* <Link href="https://www.pexels.com/photo/person-holding-coin-1602726/">
                                    <a target="_blank">Foto de maitree rimthong en Pexels</a>
                                </Link> */}
                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2>Entregamos un servicio de valor con un precio justo. </h2>
                                <p>
                                El control de plagas es una labor de estudio previo y conocimiento 
                                de los comportamientos de los seres vivos a controlar.
                                </p>
                                <p>En Emex - Control de Plagas, tenemos un horizonte con un claro rumbo 
                                    hacia la responsabilidad ambiental, social y empresarial, 
                                    lo que nos impone el desafío de ser competentes, con 
                                    metodologías cada vez menos contaminantes e invasivas 
                                    y además, menos costosas pero muy eficientes, eficaces 
                                    y efectivas.</p>

                                <Link href="/sobre-nosotros">
                                    <a className="btn btn-primary"> Más información sobre nosotros</a>
                                </Link>
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

export default About;