import React from "react";

function About({bio}) {
  const isBio = !!bio?<p>{bio}</p>:null
  return (
    <div id="about">
      <h2>About Me</h2>
      {isBio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;
