import React from "react";

function About() {
  return (
    <div style={{ textAlign: "left", marginLeft: "8rem" }}>
      <h1>About Page</h1>
      <p style={{ marginTop: "0.8rem", width: "80vw", fontSize: "1.1rem" }}>
        React suite is a library of React components, sensible UI design, and a
        friendly development experience. It is supported in all major browsers.
        It provides pre-built components of React which can be used easily in
        any web application. Even though we create an element describing the
        whole UI tree on every tick, only the text node whose contents have
        changed gets updated by React DOM. In our experience, thinking about how
        the UI should look at any given moment, rather than how to change it
        over time, eliminates a whole class of bugs.
      </p>
    </div>
  );
}

export default About;
