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
                <title>EMEX - Control de Plagas - Inicio</title>
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
              description: "Esta es la página de inicio de este sitio web, se describen los tipos de servicios de control de plagas, roedores, insectos, arácnidos, palomas, murciélagos, sanitización de espacios comunes, virus, bacterias, hongos, asesorías técnicas, control, prevencion, educación. Listamos una serie de lugares y negocios a los que prestamos el servicio, casas particulares, empresas manufactureras, empresas comerciales, industrias, condominios, oficinas, restaurantes, instituciones educativas, entes gubernamentales. Listamos a nuestros clientes y colaboradores. Ofrecemos precios por cada servicio y planes de servicios. Ofrecemos medios de pago, efectivo, transferencia bancaria, tarjeta de crédito. ",
              funder: "EMEX - Control de Plagas",
              url: "http://www.facebook.com/emex.life",
              keywords: "control de plagas,sanitización,desratización,desinsectación,control de palomas,instalación de pinchos para aves,control de murciélagos,trampas ultravioleta,roedores,ratones,ratas,guarenes,pericotes,insectos,termitas,cucarachas,baratas,chinches,moscas,mosquitos,arácnidos,arañas,murciélagos,sanitización de espacios comunes,virus,coronavirus,tifus,influenza,bacterias,estreptococo,hongos,asesorías técnicas,control,prevención,educación,casas particulares,empresas manufactureras,empresas comerciales,industrias,condominios,oficinas,restaurantes,instituciones educativas,entes gubernamentales,planes de servicios,medios de pago,efectivo,transferencia bancaria,tarjeta de crédito"
            })
        }}
   />
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