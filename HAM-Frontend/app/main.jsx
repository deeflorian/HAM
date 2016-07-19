import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {renderRoutes} from './routing/Router'

injectTapEventPlugin();
ReactDOM.render(renderRoutes(), document.getElementById('root'))