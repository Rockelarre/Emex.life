import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import About from '../components/HomeOne/About';
import Services from '../components/HomeOne/Services';
/* import Webinar from '../components/HomeOne/Webinar'; */
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import MediosPago from '../components/Common/MediosPago';
/* import BlogPost from '../components/Common/BlogPost'; */
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';
import Head from 'next/head';

class Index extends Component {
    render() {
        return (
            
            <React.Fragment>
                <Head>
                {/* <html lang="es"/> */}
                <title>EMEX - Control de Plagas - Inicio</title>
                </Head>
                <Navbar />
                <MainBanner />
                <About />
                <a name="servicios" />
                <Services />
                {/* <Webinar /> */}
                <a name="clientes" />
                <PartnerContent />
                <FeedbackSlider />
                <a name="precios" />
                <PricingCard />
                <a name="pago" />
                <MediosPago />
                {/* <BlogPost /> */}
                <FreeTrialForm />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;