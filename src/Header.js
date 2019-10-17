import React from "react";
import Profile from "./Profile";

export default function Header(props) {
  console.log(props);
  return (
    <header>
      I'm the header;
      <Profile name={props.name} age={props.age} />
    </header>
  );
}
