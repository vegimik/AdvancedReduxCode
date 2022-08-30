import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import {createStore, applyMiddleware} from 'redux';
import {Provider  } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import Feature from './components/Feature'

const store =createStore(
    reducers, 
    {},
    applyMiddleware(reduxThunk))
    
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App>
            <Route path="/" component={Welcome}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/feature" component={Feature}/>
        </App>
    </BrowserRouter>
</Provider>, document.querySelector('#root'));