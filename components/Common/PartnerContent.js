import React, { Component } from 'react';
import Link from 'next/link';

class PartnerContent extends Component {
    render() {
        return (
            <div className="partner-area ptb-110 bg-f2f6f9">
                <div className="container">
                    <div className="section-title">
                        <h2>Estos son nuestros clientes y colaboradores</h2>
                        <p>
                            Cada día crece más nuestra cartera de clientes, y también nuestro prestigio.
                        </p>
                    </div>

                    <div className="customers-partner-list">

                        <div className="partner-item">
                            <Link href="/#">
                                <a target="_blank">
                                    <img src="/images/partner/MercadoModelo.svg" alt="image" />
                                </a>
                            </Link>
                        </div>



                        <div className="partner-item">
                            <Link href="https://www.gob.cl">
                                <a target="_blank">
                                    <img src="/images/partner/partner1.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://www.tottus.cl">
                                <a target="_blank">
                                    <img src="/images/partner/partner2.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://www.dole.cl">
                                <a target="_blank">
                                    <img src="/images/partner/partner3.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://www.lactalis.fr">
                                <a target="_blank">
                                    <img src="/images/partner/partner4.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://www.cottolengo.cl">
                                <a target="_blank">
                                    <img src="/images/partner/partner5.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://cementeriogeneral.cl">
                                <a target="_blank">
                                    <img src="/images/partner/partner6.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://www.babytuto.com/">
                                <a target="_blank">
                                    <img src="/images/partner/partner7.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://containerspatagonia.cl">
                                <a target="_blank">
                                    <img src="/images/partner/partner8.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://www.heavenward.cl">
                                <a target="_blank">
                                    <img src="/images/partner/partner9.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://www.elcachafaz.cl/">
                                <a target="_blank">
                                    <img src="/images/partner/partner10.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://cl.solo.global/es/">
                                <a target="_blank">
                                    <img src="/images/partner/solo-2.svg" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://www.redstihl.cl">
                                <a target="_blank">
                                    <img src="/images/partner/partner11.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="https://anasac.cl">
                                <a target="_blank">
                                    <img src="/images/partner/partner12.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerContent;