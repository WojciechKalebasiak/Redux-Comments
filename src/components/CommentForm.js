import React from 'react'
import '../styles/CommentForm.css';
const CommentForm = ({ addComment }) => 
        <form onSubmit = {
            (e)=>{
            if(e.target.firstChild.value)
                e.preventDefault();
                addComment(e.target.firstChild.value);
                e.target.firstChild.value='';
            }}>
            <input />
        </form>

export default CommentForm;