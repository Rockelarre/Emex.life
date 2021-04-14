import React, { Component } from 'react';
import Navbar_2 from '../components/Layouts/Navbar_2';
import PageBanner from '../components/Common/PageBanner';
import Team from '../components/Common/Team';
import ContactFormContent from '../components/Contact/ContactFormContent';
import Footer from '../components/Layouts/Footer';
import Head from 'next/head';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <html lang="es"/>
                <Head>
                <title>EMEX - Contacto</title>
                </Head>
                <Navbar_2 />
                <PageBanner 
                    pageTitle="Contacto" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contacto" 
                    bgImgClass="item-bg3" 
                />
                <Team />  
                <ContactFormContent />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Contact;