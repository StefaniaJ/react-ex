import React from "react";
import AddPostForm from "./AddPostForm";
import Post from "./Post";

export default function Feed(props) {
  return (
    <section>
      <AddPostForm />
      {/* <Post /> */}
      {props.posts.map(item => {
        return (
          <Post
            // key={index}
            key={item._id}
            message={item.message}
            author={item.author}
            comments={item.comments}
            likes={item.likes}
          />
        );
      })}
    </section>
  );
}
