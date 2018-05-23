import React from 'react';
import '../styles/Comment.css';
import '../../node_modules/font-awesome/css/font-awesome.css'; 
const Comment = ({ text, votes, id, thumbUpComment,thumbDownComment, deleteComment }) => <li>
    {text}<span>votes: {votes}</span>
    <button onClick={()=>thumbUpComment(id)}><i className={'fa fa-thumbs-up fa-2x'}></i></button>
    <button onClick={() => thumbDownComment(id)}><i className={'fa fa-thumbs-down fa-2x'}></i></button>
    <button onClick={() => deleteComment(id)}><i className={'fa fa-minus fa-2x'}></i></button>
    </li>;

export default Comment;