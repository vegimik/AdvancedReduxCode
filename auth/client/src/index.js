import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import {createStore, applyMiddleware} from 'redux';
import {Provider  } from 'react-redux';
import thunk from 'redux-thunk'
import reducers from './reducers';

const store =createStore(
    reducers, 
    {},
    applyMiddleware(thunk))
    
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App>
            <Route path="/" component={Welcome}/>
            <Route path="/signup" component={Signup}/>
        </App>
    </BrowserRouter>
</Provider>, document.querySelector('#root'));