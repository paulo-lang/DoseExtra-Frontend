import React, { useState } from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Media from './pages/Media'

import logoImg from './assets/Home/logo6.svg'

import './index.css'

export default function Routes() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <HashRouter>
            <div>
                <div className="header">
                    <headerleft>
                        <NavLink className={'link left'} to="/Media">Mídia</NavLink>
                        <NavLink className={'link left'} to="/Events">Eventos</NavLink>
                    </headerleft>
                    <headercenter>
                        <NavLink className={'link'} to="/"><img class='logo' onClick={() => {
                        }} src={logoImg} alt='Banda Dose Extra'></img></NavLink>

                    </headercenter>
                    <headerright>
                        <NavLink className={'link right'} to="/Contact">Contato</NavLink>
                        <NavLink className={'link right'} to="/About">Sobre</NavLink>
                    </headerright>
                    <div className="navbar-menu">
                        {toggleMenu
                            ? <RiCloseLine color="#2f5397" size={'9vw'} onClick={() => setToggleMenu(false)} />
                            : <RiMenu3Line color="#2f5397" size={'9vw'} onClick={() => setToggleMenu(true)} />}
                        {toggleMenu && (
                            <div className="navbar-menu_container scale-up-center">
                                <div className="navbar-menu_container-links">
                                    <p className='menu'><NavLink className={'link'} to="/Media">Mídia</NavLink></p>
                                    <div className='separator'></div>
                                    <p className='menu'><NavLink className={'link'} to="/Events">Eventos</NavLink></p>
                                    <div className='separator'></div>
                                    <p className='menu'><NavLink className={'link'} to="/Contact">Contato</NavLink></p>
                                    <div className='separator'></div>
                                    <p className='menu'><NavLink className={'link'} to="/About">Sobre</NavLink></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Events" component={Events} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Media" component={Media} />
                </div>
            </div>
        </HashRouter>
    );
}