import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import showResults from './showResults';

import AddClient from './AddClient';

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 15 }}>
            <h2>Add client</h2>
            <AddClient onSubmit={showResults} />
        </div>
    </Provider>,
    document.getElementById('root')
);
