/**
 * Created by hcj on 24/01/2018.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import {Provider} from 'react-redux';

// import Provider from  './containers/Provider';
import reducer from './reducers/index';
import App from './containers/App';


let store = Redux.createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)