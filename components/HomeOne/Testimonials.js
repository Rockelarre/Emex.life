import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    animateOut: 'fadeOut',
    items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonials-area ptb-110">
            <div className="container">
                <div className="section-title">
                    <h2>Nuestros Clientes Dicen de Nosotros</h2>
                    <p>
                        Estamos muy preocupados de la opinión que nuestros clientes 
                        tienen de nosotros, y sus comentarios sobre nuestros servicios.
                    </p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente1.png" alt="image" />
                            <h3>Soledad<br/>Lopez</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Muy buena atención.
                        <br/>
                        <br/>
                        Muy puntuales y cordiales.
                        <br/>
                        <br/>
                        Trabajo bien hecho y efectivo.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente2.png" alt="image" />
                            <h3>Yusara<br/>Ahumada</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Soy hija de la que contrató el servicio, excelente trabajo y atención, 
                        muy amable la señorita que atendió al teléfono, resolvió todas las dudas 
                        y explicó todo detalladamente, la persona que vino a fumigar también, 
                        dió todas las indicaciones e hizo un muy buen trabajo.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente3.png" alt="image" />
                            <h3>Vanesa</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        En el mismo día que llamé ya me dieron cita y fueron puntuales 
                        y serios.
                        <br/>
                        <br/>
                        Muy recomendable.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente4.png" alt="image" />
                            <h3>Jose<br/>Gamboa</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Súper preocupados.
                        <br/>
                        <br/>
                        El ejecutivo que tomó mi caso fue súper responsable.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente5.png" alt="image" />
                            <h3>Pablo<br/>Barriuso</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Muy bien el trabajo, en tiempo y forma.
                        <br/>
                        Siempre mantuvieron el contacto y todos las personas con las 
                        que interactué muy amables y dispuestas a explicar todo.
                        <br/>
                        <br/>
                        Muy recomendado.
                        <br/>
                        Además el servicio fue bueno y resolvieron el 
                        problemas a un precio razonable.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente6.png" alt="image" />
                            <h3>Verónica </h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Buena empresa. Con profesionales que te guían con respecto a la 
                        plaga.
                        <br/>
                        <br/>
                        Con fumigadores responsables.
                        <br/>
                        <br/>
                        Rápida respuesta y amabilidad de la secretaria.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente7.png" alt="image" />
                            <h3>Manuel<br/>Torres</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Rápido profesional, efectivo y certero.
                        <br/>
                        <br/>
                        Excelente atención gente muy educada.
                        <br/>
                        <br/>
                        Gracias.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente8.png" alt="image" />
                            <h3>Valentina</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Muy atentos, me contactaron apenas mandé la cotización. 
                        <br/>
                        <br/>
                        Me explicaron todo súper bien y la persona que vino a hacer el trabajo 
                        también fué muy amable.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente9.png" alt="image" />
                            <h3>Andrea<br/>Angulo</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Fueron súper rápidos, diligentes y nos explicaron todos los procesos y 
                        pasos a seguir!
                        <br/>
                        <br/>
                        Definitivamente los recomiendo.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente10.png" alt="image" />
                            <h3>Guillermo</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Recomendable, muy responsables y con muy buena atención desde el inicio 
                        hasta finalizar el trabajo.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente11.png" alt="image" />
                            <h3>Victor<br/>Jerez</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Recomiendo al 100% a esta empresa ya 
                        que coticé varias y la que me dio mayor seguridad fue EMEX, 
                        la conviccion de la persona que atiende el teléfono y te explica 
                        todo el procedimiento te deja tranquilo que va a resultar.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente12.png" alt="image" />
                            <h3>Giuseppe<br/>Emperiale</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Muy buena atención, el operador preocupado del bienestar de la casa 
                        y duración del servicio.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente13.png" alt="image" />
                            <h3>Rodrigo</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        El técnico que realizó el control de plagas muy profesional 
                        y además de gentil para realizar su trabajo.
                        <br/>
                        Lo más importante que el procedimiento que realizaron fue muy efectivo.
                        <br/>
                        Se eliminó las ratas que estaban en el entretecho.
                        <br/>
                        <br/>
                        El servicio es muy recomendable.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente4.png" alt="image" />
                            <h3>Guillermo<br/>Araya</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Excelente servicio economico y puntual se precuparon mucho y me 
                        solucionaron el problema de forma definitiva.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente1.png" alt="image" />
                            <h3>Susana<br/>Varas</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Muy buena ya que cumplieron con los plazo de fumigación.
                        <br/>
                        <br/>
                        Con un personal muy profesional.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente2.png" alt="image" />
                            <h3>Guacolda</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Me gustó el trabajo realizado.
                        <br/>
                        Preocupado de todos los sectores posiblemente afectados 
                        por los roedores.
                        <br/>
                        La persona que concurrió a mi domicilio respondía amablemente 
                        las preguntas alusivas al tema.
                        <br/>
                        <br/>
                        Muchas gracias.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente3.png" alt="image" />
                            <h3>Paula<br/>Montiel</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Recomiendo 100% a la empresa, son muy profesionales para 
                        realizar su trabajo, super agradecida de ellos.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente6.png" alt="image" />
                            <h3>Silvia<br/>Cantellano</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Emex control de plagas respondió rápidamente a nuestra cotización.
                        <br/>
                        Nos comunicamos por whatsapp para conversar más facilmente sobre 
                        los requerimientos y dudas que tenía respecto a la fumigación.
                        <br/>
                        Nos guiaron y atendieron muy bien.
                        <br/>
                        La fumigación se concretó al 
                        día siguiente de haberlos contactado.
                        <br/>
                        Excelente servicio, muy recomendado.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente8.png" alt="image" />
                            <h3>Monica<br/>Acevedo</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Excelente servicio puntuales, buen resultado y muy bien 
                        informados en todo momento me asesoraron, muy agradecida 
                        del servicio otorgado.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente9.png" alt="image" />
                            <h3>Ana<br/>Flores</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Excelentes!
                        <br/>
                        <br/>
                        Trabajo limpio y ordenado.
                        <br/>
                        <br/>
                        Muy amables, buen precio 
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente5.png" alt="image" />
                            <h3>Fernando<br/>Perretta</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Excelente empresa, cumplieron con lo acordado, dió resultado la 
                        fumigación de arañas.
                        <br/>
                        <br/>
                        Muy bien atendido por Blanca.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente1.png" alt="image" />
                            <h3>Catherine<br/>Acevedo</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Coticé y acá me daban un servicio completo con garantía de 2 años, 
                        el profesional que vino fue excelente, nos dió indicaciones y cuando 
                        tuvimos un problema vino de nuevo a ayudarnos, buena asesoría, la recomiendo.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente7.png" alt="image" />
                            <h3>Carlos<br/>Rodríguez</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Puntualidad, seriedad, profesionalismo de principio a fin.
                        <br/>
                        En la primera sesión de fumigación se vieron los efectos de chinches muertas.
                        <br/>
                        Juan Carlos, la persona que asistió nos explicó muy bien las características 
                        de estos insectos desconocidos hasta entonces para nosotros.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente2.png" alt="image" />
                            <h3>Carolina<br/>Vargas</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Mi experiencia fue buena.
                        <br/>
                        <br/>
                        2 empresas se pusieron en contacto conmigo rápidamente y 
                        una de ellas solucionó mi problema con efectividad: EMEX.
                        <br/>
                        <br/>
                        Muchas gracias.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente3.png" alt="image" />
                            <h3>Maria Jose<br/>Herrera</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Hugo trabaja muy bien y es muy gentil.
                        <br/>
                        <br/>
                        Quedamos tranquilos sin ratones ni bichos.
                        <br/>
                        <br/>
                        Hice ambos servicios y el precio muy conveniente.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/clients/cliente6.png" alt="image" />
                            <h3>Natalia<br/>Acuña</h3>
                            {/* <span>CEO at Envato</span> */}
                        </div>
                        <p>
                        Muy buen servicio, claros y puntuales.
                        <br/>
                        <br/>
                        Quedamos muy satisfechos.
                        <br/>
                        <br/>
                        La plaga fue controlada y eliminada.
                        <br/>
                        <br/>
                        100% recomendable.
                        </p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    
                </OwlCarousel> : ''}
            </div>
            
            {/* Shape Images */}
            <div className="shape-img1"><img src="/images/shape/shape1.png" alt="image" /></div>
            <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape-img2"><img src="/images/shape/shape2.svg" alt="image" /></div>
            <div className="shape-img5"><img src="/images/shape/shape5.svg" alt="image" /></div>
            <div className="shape-img4"><img src="/images/shape/shape4.svg" alt="image" /></div>
            <div className="dot-shape1"><img src="/images/shape/dot1.png" alt="image" /></div>
            <div className="dot-shape2"><img src="/images/shape/dot3.png" alt="image" /></div>


        </div>
    )
}

export default Testimonials;