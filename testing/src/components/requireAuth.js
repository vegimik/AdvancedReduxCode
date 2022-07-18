import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway()
    }

    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      console.group('shouldNavigateAway')
      console.log(this.props, this.state)
      console.groupEnd()
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { comments: state.comments, auth: state.auth }
  }

  return connect(mapStateToProps)(ComposedComponent)
}
