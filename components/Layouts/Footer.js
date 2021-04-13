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
                                <h3>Servicios</h3>

                                <ul className="footer-services-list">
                                    <li>
                                        {/* <Link href="/service-details"> */}
                                            <a>SANITIZACION</a>
                                        {/* </Link> */}
                                    </li>
                                    <li>
                                        {/* <Link href="/service-details"> */}
                                            <a>DESRATIZACION</a>
                                        {/* </Link> */}
                                    </li>
                                    <li>
                                        {/* <Link href="/service-details"> */}
                                            <a>DESINSECTACION</a>
                                        {/* </Link> */}
                                    </li>
                                    <li>
                                        {/* <Link href="/service-details"> */}
                                            <a>CONTROL DE PALOMAS</a>
                                        {/* </Link> */}
                                    </li>
                                    <li>
                                        {/* <Link href="/service-details"> */}
                                            <a>INSTALACION PINCHOS PARA AVES</a>
                                        {/* </Link> */}
                                    </li>
                                    <li>
                                        {/* <Link href="/service-details"> */}
                                            <a>CONTROL DE MURCIELAGOS</a>
                                        {/* </Link> */}
                                    </li>
                                    <li>
                                        {/* <Link href="/service-details"> */}
                                            <a>TRAMPAS ULTAVIOLETAS</a>
                                        {/* </Link> */}
                                    </li>
                                    <li>
                                        {/* <Link href="/service-details"> */}
                                            <a>ASESORIAS</a>
                                        {/* </Link> */}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Enlaces Rápidos</h3>

                                <ul className="quick-links-list">
                                    <li>
                                        <Link href="/home">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/opiniones">
                                            <a>Opiniones de Clientes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sobre-nosotros">
                                            <a>Sobre Nosotros</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contacto">
                                            <a>Contactos</a>
                                        </Link>
                                    </li>

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

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    {/* <a href="/">
                                        <img src="/images/white-logo.png" alt="image" />
                                    </a> */}
                                    <h3>CRÉDITOS</h3>
                                    <a>Fotografías:</a>
                                    <a target="_blank" href="https://www.pexels.com/photo/person-holding-coin-1602726/">Alcancía por senivpetro en Pexels</a>
                                    <a target="_blank" href="https://es.vecteezy.com/vectores-gratis/cintas-doradas">Cintas Doradas Vectores por Vecteezy</a>
                                    <a target="_blank" href='https://www.freepik.es/fotos/negocios'>Negocios por senivpetro en Freepik</a>
                                    <a target="_blank" href='https://www.freepik.es/fotos/personas'>Personas por pch.vector en Freepik</a>
                                    <a target="_blank" href='https://www.freepik.es/fotos/ciudad'>Ciudad por mego-studio en Freepik</a>
                                    <a target="_blank" href="https://www.freepik.es/fotos/cafe">Café por shurkin_son en Freepik</a>
                                    <br/>
                                    <br/>
                                    <div><a>Vectores:</a></div>
                                    <a target="_blank" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
                                    <br/>
                                    <a target="_blank" href="https://www.freepik.com" title="Freepik">Freepik</a>
                                    <br/>
                                    <a target="_blank" href="https://creativemarket.com/eucalyp" title="Eucalyp">Eucalyp</a>
                                    <br/>
                                    <a target="_blank" href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a>
                                    <br/>
                                    <a target="_blank" href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a>
                                    <br/>
                                    <a target="_blank" href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a>
                                    <br/>
                                    <a target="_blank" href="https://www.flaticon.es/autores/swifticons" title="Swifticons">Swifticons</a>
                                    <br/>
                                    <a target="_blank" href="https://www.flaticon.com/authors/geotatah" title="geotatah">geotatah</a>
                                    <br/>
                                    <a target="_blank" href="https://www.flaticon.com/authors/pause08" title="Pause08">Pause08</a>
                                    <br/>
                                    <a target="_blank" href="https://www.flaticon.es/autores/eucalyp" title="Eucalyp">Eucalyp</a>
                                    <br/>
                                    <a target="_blank" href="https://www.flaticon.es/autores/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a>
                                    <br/>
                                    <a target="_blank" href="https://www.flaticon.es/autores/ddara" title="dDara">dDara</a>
                                    <br/>
                                    <a target="_blank" href="https://www.freepik.es/vectores/negocios" title="studiogstock">studiogstock</a>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>Copyright &copy;{currentYear} Desarrollado por <a href="https://cianware.com/" target="_blank">Cianware.com </a>. Todos los Derechos Reservados.</p>
                            </div>

                            {/* <div className="col-lg-6 col-md-6 col-sm-6">
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
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="circle-map">
                    <img src="/images/emex_2.svg" alt="image" />
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