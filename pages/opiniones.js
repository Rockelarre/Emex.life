import React, { Component } from 'react';
import Navbar_2 from '../components/Layouts/Navbar_2';
import PageBanner from '../components/Common/PageBanner';
import Testimonials from '../components/HomeOne/Testimonials';
import FeedbackSlider from '../components/Common/FeedbackSlider';
/* import CustomerFeedback from '../components/HomeFive/CustomerFeedback'; */
import Footer from '../components/Layouts/Footer';
import Head from 'next/head';

class Feedback extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                <title>EMEX - Opiniones de Nuestros Clientes</title>
                </Head>
                <Navbar_2 />
                <PageBanner 
                    pageTitle="Opiniones" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Opiniones" 
                    bgImgClass="item-bg3" 
                />  
                <Testimonials />
                <FeedbackSlider />
                {/* <CustomerFeedback /> */}
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Feedback;