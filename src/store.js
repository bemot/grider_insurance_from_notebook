import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import ACReducer from '../src/reducers';

const reducermain = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    ACReducer,
});

const store = createStore(
    reducermain,
    composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
