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
                <Head>
                <title>EMEX - Contacto</title>
                <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
              description: "En esta página se presentan los representante de la empresa EMEX - Control de Plagas, y sus datos de contacto, teléfono, email, y también se muestra un teléfono para contactarse por WhatsApp directamente para agendar y comprar servicios.",
              funder: "EMEX - Control de Plagas",
              keywords: "control de plagas,sanitización,desratización,desinsectación,control de palomas,instalación de pinchos para aves,control de murciélagos,trampas ultravioleta,roedores,ratones,ratas,guarenes,pericotes,insectos,termitas,cucarachas,baratas,chinches,moscas,mosquitos,arácnidos,arañas,murciélagos,sanitización de espacios comunes,virus,coronavirus,tifus,influenza,bacterias,estreptococo,hongos,asesorías técnicas,control,prevención,educación,casas particulares,empresas manufactureras,empresas comerciales,industrias,condominios,oficinas,restaurantes,instituciones educativas,entes gubernamentales,planes de servicios,medios de pago,efectivo,transferencia bancaria,tarjeta de crédito"
            })
        }}
   />
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