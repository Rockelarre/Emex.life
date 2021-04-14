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
                <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "http://schema.org",
            author: {
                "@type": "Person",
                email: "mailto:leogrises@gmail.com",
                /* image: "janedoe.jpg", */
                jobTitle: "Developer",
                name: "Daniel Vega Caro",
                telephone: "(+56) 9 6702 0377",
                url: "http://www.cianware.com"
              },
              description: "En esta página se lista una serie de opiniones positivas de clientes satisfechos con nuestros servicios.",
              funder: "EMEX - Control de Plagas",
              url: "http://www.facebook.com/emex.life",
              keywords: "control de plagas,sanitización,desratización,desinsectación,control de palomas,instalación de pinchos para aves,control de murciélagos,trampas ultravioleta,roedores,ratones,ratas,guarenes,pericotes,insectos,termitas,cucarachas,baratas,chinches,moscas,mosquitos,arácnidos,arañas,murciélagos,sanitización de espacios comunes,virus,coronavirus,tifus,influenza,bacterias,estreptococo,hongos,asesorías técnicas,control,prevención,educación,casas particulares,empresas manufactureras,empresas comerciales,industrias,condominios,oficinas,restaurantes,instituciones educativas,entes gubernamentales,planes de servicios,medios de pago,efectivo,transferencia bancaria,tarjeta de crédito"
            })
        }}
   />
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