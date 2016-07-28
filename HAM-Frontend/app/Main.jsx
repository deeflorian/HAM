import Immutable from 'immutable';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//import {renderRoutes} from './routing/Router';
import {hamReducer} from './redux/Reducers';
import ClientAPI from './api/ClientAPI';
import App from './ui/App';
import Assignments from './ui/pages/Assignments';

injectTapEventPlugin();


let clientAPI = new ClientAPI();
let store = createStore(hamReducer, {
	activeSemester: clientAPI.getSemesters()[0],
	courseFilters: new Immutable.Set,
	statusFilters: new Immutable.Set,
});

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Assignments}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);