import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { connect } from 'react-redux'
import * as actions from 'actions'
import { checkIfItsDone } from './example'

class App extends Component {
  example1() {
    checkIfItsDone()
  }

  renderBody() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      )
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      )
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderBody()}</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h3>Examples from javascript</h3>
        <ul>
          <li>
            <button onClick={() => this.example1()}>Example 1</button>
          </li>
        </ul>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, actions)(App)
