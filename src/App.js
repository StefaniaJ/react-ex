import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import Footer from "./Footer";

function App() {
  const name = "Stef";
  const age = 22; //Pass this to profile and footer
  // const posts = [<Post />, <Post />]; // pass this to feed
  const [posts, setPosts] = useState([
    // {
    //   message: "very strange",
    //   author: "Alin"
    // }
  ]);

  useEffect(() => {
    const baseURL = "https://frontend-d1d9.restdb.io/rest/";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "	5d887445fd86cb75861e25f1",
      "cache-control": "no-cache"
    };
    fetch(baseURL + "posts?fetchchildren=true", {
      method: "get",
      headers: headers
    })
      .then(e => e.json())
      .then(e => setPosts(e));
  }, []);

  function addPost() {
    // const copy = posts.concat([<Post />]);
    const copy = posts.concat([
      {
        message: "very strange",
        author: "everybody"
      }
    ]);
    setPosts(copy);
  }

  return (
    <div className="App">
      <button onClick={addPost}>Add a new post</button>
      {/* <Header username="Dannie" hobby="CSS" /> */}
      <Header name={name} age={age} />
      <Feed posts={posts} />
      <Footer name={name} />
    </div>
  );
}

export default App;
