import { motion } from "framer-motion";
import React, { useState,} from "react";



const Section = (props) => {

    const { children } = props;

    return (< motion.section className="section"
        initial={{
            opacity: 0,
            y: 50,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.6,
            },
        }}>

        {children}

    </motion.section>
    )
}

export const Interface = () => {
    const [menuOpened, setMenuOpened] = useState(true);

    
    return (<div className="tetetete">


        {/* <Menu className="ttttt" menuOpened={menuOpened} setMenuOpened={setMenuOpened}/> */}
        {/* <div className="hamburger" onClick={() => setMenuOpened(!menuOpened)}>
            
        </div> */}

        <div className={`menu-container ${menuOpened ? "open" : ""}`}>





            <div className="menu">

                <LandingSection onmousedown="return false" onselectstart="return false" />


                <TeleportationSection >  </ TeleportationSection>

                <ProjetSection />

                <ContactSection  />
            </div>

        </div>

       

    </div>

    )
}

const LandingSection = () => {

    

    
    return (

        <Section className="s1">


            <p className="number">Level-00</p>
            <h1> <span style={{ color: "blue" }}>Bonjour </span>je suis Antoine </h1>

            <motion.p className="subtitle"

                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 1.5,
                    },
                }}>
                création de site internet dans les<br /> Hautes-Pyrénées

            </motion.p>

            <motion.p 
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 2,
                    },
                }}


            >
                Développeur indépendant basé à Lourdes, je vous accompagne dans la création de votre site internet.

            </motion.p>

            {/* <motion.button className="btnS1" onClick={scrollToContact}
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 2.5,
                    },
                }}


            >
                me contacter

            </motion.button> */}

            <div class="container">
                <div class="icon-scroll"></div>
            </div>

        </Section>

    )

}

const TeleportationSection = () => {

    return (

        <Section>

            <p className="number1">Level-01</p>


            <div className="tp-disable">

                <h2>Développeur freelance </h2>

                <p>Je  m’occupe de :</p>

                <ul>

                    <motion.li initial={{
                        opacity: 0,
                        x: 50,
                    }} whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                            delay: 1,
                        },
                    }}>la création et/ou la refonte de votre site internet de  A à Z. </motion.li>
                    <motion.li initial={{
                        opacity: 0,
                        x: 50,
                    }} whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                            delay: 1.5,
                        },
                    }}>la sécurisation de votre site avec la mise en place du protocole HTTPS via un certificat SSL, l’ajout d’extensions de sécurité et la mise en place de bonnes pratiques en la matière</motion.li>
                    <motion.li initial={{
                        opacity: 0,
                        x: 50,
                    }} whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                            delay: 2,
                        },
                    }}>le référencement naturel (SEO) des pages de votre site afin d’être visible sur la première page de résultats des moteurs de recherche, notamment Google</motion.li>
                    <motion.li initial={{
                        opacity: 0,
                        x: 50,
                    }} whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                            delay: 2.5,
                        },
                    }}>la maintenance et la mise à jour de votre site afin de conserver un site sécurisé et d’implémenter les dernières options sorties</motion.li>

                </ul>

            </div>





            
        </Section>

    )

}

const ProjetSection = () => {

    return (

        <Section >

            <div className="lv3UI">

                <p className="number2"> Level-02</p>
                <h2>Mes Projets </h2>



            </div>
            <div ><motion.p
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 1,
                    },
                }}


            >
                projet Wordpress

            </motion.p> </div>

            <div className="projet-container">


                <div className="projet">

                    <motion.a initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 1.5,
                    },
                }} className="projet3" href="https://www.domaine-de-rodachristo.fr/" target="_blank">
                        <img src="/src/assets/image 38.jpg" alt="Description de l'image" />
                    </motion.a >
                    <motion.a  initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 2,
                    },
                }} className="projet3" href="https://www.antoine-camino.fr/" target="_blank">
                        <img src="/src/assets/image 39.jpg" alt="Description de l'image" />
                    </motion.a >


                </div>




            </div>












            {/* <div className="gameUI">
                <p>appuyer sur echap pour quitter le jeu</p>
            </div>
 */}

        </Section>

    )

}

const ContactSection = () => {
    
    
    return (

        <Section  id="secR" >
            <p className="number3"> Level-03</p>
            <h2> Mes Réseaux </h2>

            <motion.p
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 0.5,
                    },
                }}


            >
                retrouver moi sur mes differents reseaux

            </motion.p>

            <div className="reseaux">
                <div> <motion.img initial={{
                    opacity: 0,
                    x: 50,
                }} whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                        delay: 1,
                    },
                }}
                    class="icon"
                    src="/src/assets/linkedin.png"
                    alt="Grapefruit slice atop a pile of other slices"
                />
                </div>
                <div> <motion.a initial={{
                    opacity: 0,
                    x: 50,
                }} whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                        delay: 1.5,
                    },
                }} href="https://www.linkedin.com/in/antoine-camino-87b362220/" target="_blank">Linkedin</motion.a></div>
            </div>


            <div className="reseaux">
                <div> <motion.img initial={{
                    opacity: 0,
                    x: 50,
                }} whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                        delay: 2,
                    },
                }}
                    class="icon"
                    src="/src/assets/twitter.png"
                    alt="Grapefruit slice atop a pile of other slices"
                />
                </div>
                <div><motion.a initial={{
                    opacity: 0,
                    x: 50,
                }} whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                        delay: 2.5,
                    },
                }} href="https://twitter.com/lunatictictic2" target="_blank">twitter </motion.a></div>
            </div>



            <div className="reseaux">
                <div> <motion.img initial={{
                    opacity: 0,
                    x: 50,
                }} whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                        delay: 3,
                    },
                }}
                    class="icon"
                    src="/src/assets/email.png"
                    alt="Grapefruit slice atop a pile of other slices"
                />
                </div>
                <div><motion.a initial={{
                    opacity: 0,
                    x: 50,
                }} whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                        delay: 3.5,
                    },
                }} href="mailto:antoine.caminodev@gmail.com">antoine.caminodev@gmail.com</motion.a></div>
            </div>















        </Section>

    )

}

