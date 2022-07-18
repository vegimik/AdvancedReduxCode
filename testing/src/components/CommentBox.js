import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
import requireAuth from './requireAuth'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.saveComment(this.state.comment)

    this.setState({ comment: '' })
  }

  sample = () => {
    this.props.fetchComments()
    this.props.saveComment(this.state.comment)
    console.group('Sample Comments')
    console.log('====================================')
    console.log('props', this.state.comment)
    console.log('props', this.props)
    console.log('state', this.state)
    console.log('====================================')
    console.groupEnd()
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.sample}>
          Fetch Comments
        </button>
        <button className="save-comments" onClick={this.props.changeAuth}>
          Login
        </button>
      </div>
    )
  }
}

export default connect(null, actions)(requireAuth(CommentBox))
