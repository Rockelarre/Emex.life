import React, { Component } from 'react';
import Navbar_2 from '../components/Layouts/Navbar_2';
import PageBanner from '../components/Common/PageBanner';
import AboutContact from '../components/About/AboutContent';
import Services from '../components/HomeOne/Services';
import Team from '../components/Common/Team';
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';
import Head from 'next/head';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <html lang="es"/>
                <Head>
                <title>EMEX - Sobre Nosotros</title>
                </Head>
                <Navbar_2 />
                <PageBanner 
                    pageTitle="Sobre Nosotros" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Sobre Nosotros" 
                    bgImgClass="item-bg1" 
                />  
                <AboutContact />
                {/* <Team /> */}
                {/* <Services /> */}
                {/* <PartnerContent /> */}
                {/* <FeedbackSlider /> */}
                {/* <PricingCard /> */}
                <FreeTrialForm />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default About;