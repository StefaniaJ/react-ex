import React from "react";

export default function Profile(props) {
  // const myname = "Stefania";
  // const age = 22;

  return (
    <div>
      <div>
        <h1>My name is {props.name}</h1>
        <h2>I'm {props.age} years old.</h2>
      </div>
    </div>
  );
}
