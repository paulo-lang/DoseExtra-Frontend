import React, { useState } from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine, RiArrowDropRightLine, RiFacebookCircleFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';

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
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height" />
            </head>
            <div >
                <div className={'header'}>
                    <headerleft>
                        <NavLink className={'link left'} to="/Media">Mídia</NavLink>
                        <NavLink className={'link left'} to="/Events">Eventos</NavLink>
                    </headerleft>
                    <headercenter>
                        <NavLink className={'link'} to="/"><img class='logo' src={logoImg} alt='Banda Dose Extra' /></NavLink>

                    </headercenter>
                    <headerright>
                        <NavLink className={'link right'} to="/Contact">Contato</NavLink>
                        <NavLink className={'link right'} to="/About">Sobre</NavLink>
                    </headerright>
                    <div className="navbar-menu">
                        <RiMenu3Line className="open-menu-modal-btn" color="#2f5397" size={'5vh'} onClick={() => setToggleMenu(!toggleMenu)} />
                        {toggleMenu && (
                            <div className="navbar-menu_container">
                                <RiCloseLine className="close-menu-modal-btn" color="#2f5397" size={'5vh'} onClick={() => setToggleMenu(!toggleMenu)} />

                                <div className="navbar-menu_container-links">
                                    <p className='menu'><NavLink className={'link'} to="/Media">Mídia</NavLink><RiArrowDropRightLine color="#2f5397" size={'5vh'} /></p>
                                    <p className='menu'><NavLink className={'link'} to="/Events">Eventos</NavLink><RiArrowDropRightLine color="#2f5397" size={'5vh'} /></p>
                                    <p className='menu'><NavLink className={'link'} to="/Contact">Contato</NavLink><RiArrowDropRightLine color="#2f5397" size={'5vh'} /></p>
                                    <p className='menu'><NavLink className={'link'} to="/About">Sobre</NavLink><RiArrowDropRightLine color="#2f5397" size={'5vh'} /></p>
                                </div>
                                <p className='navbar-menu_container-social'>Conecte-se!</p>
                                <div className='navbar-menu_container-social-medias'>
                                    <RiFacebookCircleFill size={'4vh'} color="#5ae1e6" />
                                    <RiInstagramFill size={'4vh'} color="#5ae1e6" />
                                    <RiTwitterFill size={'4vh'} color="#5ae1e6" />
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