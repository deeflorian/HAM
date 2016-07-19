import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from '../ui/App'
import Main from '../ui/pages/Main'

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Main}/>
        </Route>
    </Router>
);