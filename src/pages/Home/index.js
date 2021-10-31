import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/Home/logo5.svg'
import backImg from '../../assets/Home/backgroundHeaderWide.jpeg'
import { FiInstagram } from 'react-icons/fi'
import './styles.css'



function Home() {



    return (
        <div class='home'>
            
            <header>
                <headerleft>
                    <Link class='link' href="#contato">Mídia</Link>
                    <Link class='link' href="#contato">Eventos</Link>
                </headerleft>

                <img class='logo' onClick={() => {
                    console.log("Clickou")
                }} src={logoImg} alt='Banda Dose Extra' height={'70%'}></img>

                <headerright>
                    <Link class='link' href="#contato">Contato</Link>
                    <Link class='link' href="#contato">Sobre</Link>
                </headerright>

            </header>
            <body class='body'>
                <img class='background' src={backImg} />
                <section id="listaShow">
                    <div>
                        <h3>Shows Marcados </h3>
                    </div>
                </section>


            </body>
            <footer class='footer'>
                <section id="contato">
                    <div>

                        <h3>Nos contate</h3>

                        <p>Tel de contato</p>
                        <p><a href="tel:19983399763">(19) 98339-9763</a></p>
                        <p><a href="tel:19982656408">(19) 98265-6408</a></p>
                        <p></p>
                        <p>email</p>
                        <p><a href="email:dose_extra@hotmail.com">dose_extra@hotmail.com</a></p>


                    </div>
                </section>

                <section id="insta">
                    <div>
                        <h3> Instagram </h3>
                        <p> <a href="www.instagram.com/doseextra.banda/"> Instagram dose extra</a></p>
                    </div>

                </section>
            </footer>
                
        </div>
    );
}

export default Home;