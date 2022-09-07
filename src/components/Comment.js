import React, {useState, useEffect} from 'react';
import '../App';
import CommentForm from './CommentForm';


function Comment () {
  const [comments, setComments] = useState([])
useEffect(()=>{
  fetch('http://localhost:3000/Comments')
  .then(res=> res.json())
  .then(data=>setComments(data));
}, []);

function handleAddComment(addNewComment){
  setComments([...comments, addNewComment])
}

//console.log(comments)
  return (
    <div style={{display: "flex", justifyContent: "space-around" , paddingTop: "130px"}}>
    <CommentForm onAddComment={handleAddComment} />
    {comments.map((comment, i) =>{
        return<div key={i}>
        <h4>{comment.Title}</h4>
        <h4>{comment.Name}</h4>
        <h4>{comment.Content}</h4>
      </div>
    })}
    </div>
  )
  
}

export default Comment;