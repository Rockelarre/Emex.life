import React, { Component } from 'react';
import Link from 'next/link';

class Team extends Component {
    render() {
        return (
            <section className="team-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>Conoce a nuestro equipo</h2>
                        <p>Contacta a nuestro equipo para tus consultas o servicios.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="icon">
                                    <img src="/icons/empresario.svg" alt="image" />
                                </div>

                                <div className="content">
                                    <h3>Oficina EMEX</h3>
                                    <span>+562 2885 7121</span>
                                    <span>emex@emexchile.cl</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="icon">
                                    <img src="/icons/hombre-de-negocios.svg" alt="image" />
                                </div>

                                <div className="content">
                                    <h3>Baltazar Vega T.</h3>
                                    <span>+569 5472 0827</span>
                                    <span>balvega@emexchile.cl</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="icon">
                                    <img src="/icons/disenador-grafico.svg" alt="image" />
                                </div>

                                <div className="content">
                                    <h3>Hugo Caro A.</h3>
                                    <span>+569 9107 9151</span>
                                    <span>hugocaro@emexchile.cl</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Team;