import { AUTH_USER, AUTH_ERROR } from '../actions/types';
import * as actions from '../actions';

const INITIAL_STATE = {
    authenticated:'',
    errorMessage:''
}

export default function(state=INITIAL_STATE, actions){
    debugger
    switch (actions.type) {
        case AUTH_USER:
            return {...state, authenticated:actions.payload};
        case AUTH_ERROR:
            return {...state, errorMessage:actions.payload};
    
        default:
            return state;
    }
}