import {combineReducers} from 'redux'
import authorization from './auth'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    auth:authorization,
    form: formReducer
})