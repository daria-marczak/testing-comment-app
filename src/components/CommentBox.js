import React, { Component } from "react";
import { connect } from "react-redux";

import requireAuth from "components/requireAuth";
import * as actions from "actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch comments
        </button>
      </div>
    );
  }
}

// CommentBox does not need the access to all of the state
// connect expects to see some parent component that has the provider tag
export default connect(null, actions)(requireAuth(CommentBox));
