import React, { Component } from 'react';
import '../styles/App.css';
import CommentsList from '../components/containers/CommentsListContainer';
import CommentForm from '../components/containers/CommentFormContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentsList />
        <CommentForm />
      </div>
    );
  }
}

export default App;
