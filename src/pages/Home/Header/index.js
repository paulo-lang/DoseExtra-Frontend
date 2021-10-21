import React from 'react';
import './styles.css'
import logoImg from '../../../assets/Home/logo.svg'
import { FiInstagram } from 'react-icons/fi'

function Header() {
    return (
        <header class='header'>
            <img class='logo' src={logoImg} alt="Banda Dose Extra" width={100} height={100} />
            <item class='link' href="#sobre">Sobre</item>
            <item class='link' href="#contato">Contato</item>
            <item class='link' href="#insta"><  FiInstagram class="imgInsta" size={20} />Instagram </item>
        </header>

    )
}

export default Header;