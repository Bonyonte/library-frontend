import React, {useState} from 'react'
import '../App';

function CommentForm({onAddComment}) {

    const [commentData, setCommentData] = useState({
        title: "",
        name: "",
        comment: "",
      })
    
      function handleChange(e){
        setCommentData({...commentData, [e.target.name]: e.target.value})
      }
    
      function handleSubmit (e){
        e.preventDefault();
        const comment = commentData
        fetch('http://localhost:3000/Comments',{
          method:'POST',
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify(comment)
        }
        .then((res) => res.json())
        .then(data => onAddComment(data))
        )
        
      }

  return (
    <div className="comment">
      <form  className="new-comment-form">
          <input onChange={handleChange} value={commentData.title} name="title" placeholder="Title" /><br/>
          <input onChange={handleChange} value={commentData.author} name="name" placeholder="Name" /><br/>
          <textarea  onChange={handleChange} value={commentData.content} name="content" placeholder="Write your comment here..." rows={10} /><br/>
          <input onSubmit={handleSubmit} type="submit" value="Share your comment" />
      </form>
    </div>
  )
}

export default CommentForm