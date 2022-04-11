import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/Home/logo6.svg'
import backImg from '../../assets/Home/backgroundHeaderWide4.jpeg'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { FiInstagram } from 'react-icons/fi'
import './styles.css'

function Home() {

    return (
        <div class='home'>
            
            <body class='body'>
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