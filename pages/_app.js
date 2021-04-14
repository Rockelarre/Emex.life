import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/flaticon.css';
import '../public/css/fontawesome.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
// import '../public/css/rtl.css';
import '../public/css/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Loader from '../components/Shared/Loader'; 
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <Head>
                    <html lang="es" />
                    <title>EMEX - Control de Plagas</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="EMEX - Control de Plagas es una empresa nacional, 
                                                        entendemos el problema de las plagas en Chile 
                                                        desde nuestra realidad local.
                                                        Tenemos mucha confianza en que nuestros métodos, 
                                                        desarrollados a partir de nuestra propia experiencia y 
                                                        conocimiento, son muy superiores a los métodos extranjeros 
                                                        implementados por la competencia, que son una solución a un 
                                                        problema muy diferente al que nos afecta como país."
                                                        />
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="10.50" />
            </React.Fragment>
        );
    }
}