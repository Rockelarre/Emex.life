import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    {/* <a href="/">
                                        <img src="/images/white-logo.png" alt="image" />
                                    </a> */}
                                    <h3>CRÉDITOS</h3>
                                    <a target="_blank" href="https://es.vecteezy.com/vectores-gratis/cintas-doradas">Cintas Doradas Vectores por Vecteezy</a>
                                    <a target="_blank" href='https://www.freepik.es/fotos/negocios'>Foto de Negocios creado por senivpetro - www.freepik.es</a>
                                    <a target="_blank" href='https://www.freepik.es/fotos/personas'>Foto de Personas creado por pch.vector - www.freepik.es</a>
                                    <a target="_blank" href='https://www.freepik.es/fotos/ciudad'>Foto de Ciudad creado por mego-studio - www.freepik.es</a>
                                    <br/>
                                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                                    <div>Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                                    <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                                    <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                                    <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/swifticons" title="Swifticons">Swifticons</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
                                    <div>Icons made by <a href="https://www.flaticon.com/authors/geotatah" title="geotatah">geotatah</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                                    <div>Icons made by <a href="https://www.flaticon.com/authors/pause08" title="Pause08">Pause08</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                                    
                                    
                                </div>

                                <ul className="social">
                                    <li>
                                        <Link href="https://www.facebook.com/emex.life">
                                            <a target="_blank"> 
                                                <i className="flaticon-facebook-letter-logo"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-instagram-logo"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-youtube-play-button"></i>
                                            </a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Servicios</h3>

                                <ul className="footer-services-list">
                                    <li>
                                        <Link href="/service-details">
                                            <a>SANITIZACION</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>DESRATIZACION</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>DESINSECTACION</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>CONTROL DE PALOMAS</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>INSTALACION PINCHOS PARA AVES</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>CONTROL DE MURCIELAGOS</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>ASESORIAS TRAMPAS ULTAVIOLETAS</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Enlaces Rápidos</h3>

                                <ul className="quick-links-list">
                                    <li>
                                        <Link href="/about">
                                            <a>Sobre Nosotros</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contacto</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Servicios</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>Precios</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contacto</h3>

                                <ul className="footer-contact-list">
                                    {/* <li>
                                        <span>Dirección:</span> 
                                         <br />  Av. Santa Josefina 9118, El Bosque, Santiago
                                    </li> */}
                                    <li>
                                        <span>Email:</span>
                                        emex@emexchile.cl
                                    </li>
                                    <li>
                                        <span>Teléfono:</span> 
                                        +569 9107 9151
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>Derechos de Autor &copy;{currentYear} <a href="https://cianware.com/" target="_blank">Cianware.com .</a> Todos los Derechos Reservados.</p>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Política de Privacidad</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Términos y Condiciones</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="logo_footer">
                    <img src="/images/emex.svg" alt="image" />
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </footer>
        );
    }
}

export default Footer;