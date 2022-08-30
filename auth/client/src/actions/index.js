import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

export const signup = (formProps, callback) => 
async dispatch =>{
    try {    
        const response = await axios.post('http://localhost:3090/signup', formProps)
        debugger
        dispatch({type:AUTH_USER, payload:response.data.token})
        callback()
    } catch (error) {
        // console.error(error.response);
        // dispatch({type: AUTH_ERROR, payload:error.response.data.error})
        
        dispatch({type: AUTH_ERROR, payload:'Email in used'})
        
    }
}
