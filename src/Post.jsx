import React, { useState } from "react";
import AddCommentForm from "./AddCommentForm";
import Comment from "./Comment";

export default function Post(props) {
  let [likes, setLikes] = useState(0);
  function updateLikes() {
    setLikes(likes + 1);
  }
  return (
    <article className="post">
      <h2>{props.author}</h2>
      <p>{props.message}</p>
      <p>You've clicked {likes} times!</p>
      {/* <button  className="likeBtn" onClick={updateLikes}>
        Likes
      </button> */}
      <button className="likeBtn">{props.likes} Likes </button>
      {/* <p>{props.likes} likes</p> */}

      <AddCommentForm />
      <ol>
        {props.comments.map(comment => {
          return (
            <Comment
              key={comment._id}
              author={comment.author}
              comment={comment.comment}
            />
          );
        })}
      </ol>
    </article>
  );
}
