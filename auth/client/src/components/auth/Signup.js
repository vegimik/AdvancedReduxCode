import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import { compose } from 'redux';
import {connect } from "react-redux";
import * as actions from '../../actions'

class Signup extends Component{

    onSubmit=(formProps)=>{
        this.props.signup(formProps, ()=>{
            this.props.history.push('/feature')
        });
    }

    onState(){
        console.log(this.props);
        console.log(this.state);
        
    }

    render(){
        const {handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                    name='email'
                    type="text"
                    component="input"
                    autoComplete='none'/>
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                    name='password'
                    type="password"
                    component="input"
                    autoComplete='none'/>
                </fieldset>
                <button>Sign Up!</button>
                <button type='button' onClick={()=> this.onState()}>See the status method 1</button>
                <div>{this.props.errorMessage}</div>
            </form>
        )
    }
}

function mapStatetoProps(state){
    return {
        authenticated: state.auth.authenticated,
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStatetoProps, actions),
    reduxForm({form: 'signup'})
)(Signup)

// export default connect(mapStatetoProps, actions)(reduxForm({form: 'signup'})(Signup));