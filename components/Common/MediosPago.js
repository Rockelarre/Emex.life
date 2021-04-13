import React, { Component } from 'react';
import Link from 'next/link';

class MediosPago extends Component {

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
                        <h2>Medios de Pago</h2>
                        <p>Aceptamos la alternativa que más le convenga.</p>
                    </div>

                    <div className="tab pricing-tab">
                        {/* Pricing Tab List */}
                        {/* <ul className="tabs">
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
                        </ul> */}

                        <div className="tab_content">
                            <div id="tab1" className="tabs-item">
                                <div className="row">
                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box">
                                            <div className="pricing-header">
                                                <h3>Efectivo</h3>
                                            </div>
                                            <div className="icon">
                                                <img src="/icons/efectivo.svg" alt="image" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Transferencia Bancaria</h3>
                                            </div>
                                            <div className="icon">
                                                <img src="/icons/transferencia.svg" alt="image" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box active">
                                            <div className="pricing-header">
                                                <h3>Tarjeta de Crédito</h3>
                                            </div>
                                            <div className="icon">
                                                <img src="/icons/credito.svg" alt="image" />
                                            </div>
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

export default MediosPago;