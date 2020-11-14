import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../about/about';
import Home from '../application/home';
import Paradise from '../paradise/paradise';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/paradise' component={Paradise}/>
        </Switch>
    </main>
);

export default Main;