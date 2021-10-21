import React, { useState } from 'react';

import logoImg from '../../assets/Home/logo.svg'
import { FiInstagram } from 'react-icons/fi'
import Header from './Header';

import './styles.css';



function Home() {
  const [page, setPage] = useState("Home")
  return (
    <div class = "home">
        <header class='header'>
            <img class='logo' src={logoImg} alt="Banda Dose Extra" width={100} height={100} />
            <item class='link' href="#sobre">Sobre</item>
            <item class='link' href="#contato">Contato</item>
            <item class='link' href="#insta"><  FiInstagram class="imgInsta" size={20} />Instagram </item>
        </header>
      <body class ="corpo">
        
        <section id="home"></section>

        <section id="sobre">
          
        </section>

        <section id="contato">
          <div>

            <h3>Nos contrate</h3>

            <p>Tel de contato</p>
            <p><a href="tel:19983399763">(19) 98339-9763</a></p>
            <p><a href="tel:19982656408">(19) 98265-6408</a></p>

          </div>
        </section>

        <section id="insta">
          <div>
            <h3> Instagram </h3>
          </div>
        </section>

        <section id="listaShow">

          <div>
            <h3>Shows Marcados </h3>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Home;