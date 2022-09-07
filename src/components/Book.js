import React, { useState } from 'react';
import '../App';

function Book({author, image, title, description, price, review, source}) {
  const [ actualDetails, setActualDetails] = useState(false);

  const handleClick = () =>{
    setActualDetails(actual=> !actual)
  }

//console.log(book);
  return (
    <div className="book">
        <h4 className="author">Author: {author}</h4>
        <img src={image} alt="book" />
        <button className="bookButton" onClick={handleClick}>Details</button>
        { actualDetails?
          <div>
          <h4><span>Title:</span> {title}</h4>
          <p><span>Description: </span>{description}</p>
          <p><strong>Price: {price}</strong></p>
          <p><span>Review:</span>{review}</p>
          <p><span>Source:</span> {source}</p>
        </div>
        :null
        }
    </div>
  )
}

export default Book