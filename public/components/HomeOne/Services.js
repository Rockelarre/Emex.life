import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="services-area bg-f2f6f9 ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>Soluciones Profesionales</h2>
                        <p>
                        Entendiendo las necesidades actuales que 
                        imponen las estrictas certificaciones 
                        nacionales e internacionales, en Emex 
                        – Control de Plagas brindamos apoyo, 
                        asesorías y servicio atento para que su 
                        empresa cumpla con todo lo requerido por 
                        las compañías certificadoras.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/icons/happyHouse1.svg" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Casas Particulares</a>
                                    </Link>
                                </h3>
                                <p>Una gran cantidad de clientes particulares han confiado 
                                    en nuestros servicios, y de forma satisfactoria han resuelto 
                                    su problema de plagas.</p>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/icons/planting.svg" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Empresas Agrícolas</a>
                                    </Link>
                                </h3>
                                <p>Entendemos la realidad agrícola, hemos trabajado
                                    In Situ con los pies en barro.</p>                            </div>
                        </div> */}

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/icons/manufacture.svg" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Empresas Manufactureras</a>
                                    </Link>
                                </h3>
                                <p>Conocemos los problemas que pueden causar
                                    las plagas en su línea productiva.</p>                            
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/icons/shop.svg" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Empresas Comerciales</a>
                                    </Link>
                                </h3>
                                <p>Su imagen lo es todo, la directriz de nuestros métodos es la 
                                    higiene y buena presentación.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/icons/factory.svg" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Industrias</a>
                                    </Link>
                                </h3>
                                <p>Implementamos tecnología de vanguardia para optimizar
                                    nuestros tiempos y formas de aplicación en sinergía con
                                    sus procesos. 
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/icons/condominio.svg" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Condominios</a>
                                    </Link>
                                </h3>
                                <p>Ofrecemos un precio especial con descuentos muy convenientes
                                    para vecindarios colaborativos.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/icons/enterprise.svg" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Oficinas</a>
                                    </Link>
                                </h3>
                                <p>Otorgue a sus empleados el mejor ambiente de trabajo,
                                    viva su vida laboral en un clima organizacional de categoria
                                    superior.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/icons/dish.svg" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Restaurantes</a>
                                    </Link>
                                </h3>
                                <p>Dirija la atención de sus clientes a su comida,
                                    nunca más pierda un cliente por motivos que escapen a sus
                                    competencias gastronómicas, seremos su colaborador de confianza.
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/icons/school.svg" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Instituciones Educativas</a>
                                    </Link>
                                </h3>
                                <p>El aprendizaje se manifiesta en ambientes limpios y seguros,
                                    proteja a los suyos y edúquelos en armonía con la pulcritud.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/icons/white-house.svg" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Entes Gubernamentales</a>
                                    </Link>
                                </h3>
                                <p>El bracitos cortos con dientes de piraña y billera infinita 
                                    es cliente nuestro >:D
                                    <br/>
                                    <br/>Somos RATAS del 84'</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Shape Images */}
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
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot3.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot4.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot5.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot6.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default Services;