import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {compose} from 'recompose';
import thunk from 'redux-thunk';

import App from './components/app.jsx';
import {reducer, Operation} from './reducer/reducer.js';
import api from './components/server/api.js';
import {Currencies} from './utils/constants.js';

const init = () => {
    const rootElement = document.querySelector(`#root`);

    const store = createStore(
        reducer,
        compose(
            applyMiddleware(
                thunk.withExtraArgument([api(), Currencies])
            ),
            __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    store.dispatch(Operation.loadCurrencyRates());

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        rootElement
    );
};

init();
