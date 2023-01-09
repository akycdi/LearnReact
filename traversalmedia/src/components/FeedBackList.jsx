import React from "react";
import FeedBackItem from "./FeedBackItem";

function FeedBackList({ feedback }) {
  if (!feedback || feedback.lenght == 0) {
    return <p>No feedback</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item}  />
      ))}
    </div>
  )
  
 
}

export default FeedBackList;
