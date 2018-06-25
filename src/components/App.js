import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import CommentList from "components/CommentList";
import CommentBox from "components/CommentBox";
import { connect } from "react-redux";

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return <button>Sign out</button>;
    } else {
      return <button>Sign in</button>;
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(App);
