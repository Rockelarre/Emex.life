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
                <Head>
                <title>EMEX - Sobre Nosotros</title>
                <script type="application/ld+json">
          {{
            "@context": "http://schema.org",
            "@type": "Empresa",
            author: {
                "@type": "Person",
                email: "mailto:leogrises@gmail.com",
                /* image: "janedoe.jpg", */
                jobTitle: "Developer",
                name: "Daniel Vega Caro",
                telephone: "(+56) 9 6702 0377",
                url: "http://www.cianware.com"
              },
              description: "En esta página se describe a la empresa en mayor profundidad, nuestros valores y fundamentos, exresados a través de la misión, visión y quienes somos.",
              funder: "EMEX - Control de Plagas",
              keywords: "control de plagas,sanitización,desratización,desinsectación,control de palomas,instalación de pinchos para aves,control de murciélagos,trampas ultravioleta,roedores,ratones,ratas,guarenes,pericotes,insectos,termitas,cucarachas,baratas,chinches,moscas,mosquitos,arácnidos,arañas,murciélagos,sanitización de espacios comunes,virus,coronavirus,tifus,influenza,bacterias,estreptococo,hongos,asesorías técnicas,control,prevención,educación,casas particulares,empresas manufactureras,empresas comerciales,industrias,condominios,oficinas,restaurantes,instituciones educativas,entes gubernamentales,planes de servicios,medios de pago,efectivo,transferencia bancaria,tarjeta de crédito"
          }}
        </script>
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