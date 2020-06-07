import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './View/Home';
import QuemSomos from './View/QuemSomos';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/quem-somos" exact component={QuemSomos}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;