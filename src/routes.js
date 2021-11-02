import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home' 
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Media from './pages/Media'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path ="/About" component={About} />
                <Route path ="/Eventos" component={Events} />
                <Route path ="/Contato" component={Contact} />
                <Route path ="/Media" component={Media} />
            </Switch>
        </BrowserRouter>
    );
}