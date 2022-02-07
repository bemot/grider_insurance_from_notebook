import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 15 }}>
            <Dashboard />
        </div>
    </Provider>,
    document.getElementById('root')
);
