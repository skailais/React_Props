import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      number="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Dzidzo"
      img="https://imgs.search.brave.com/zgtvy-_ByLtahUP-yAZYYIEpJGnoJIfXFiKI8rwtkXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubXAzeGEuY2Mv/aW1hZ2VzL2FydGlz/dHNfMTUwL2R6aWR6/by5qcGVn"
      number="+987 788 233"
      email="D@dzidzo.com"
    />
  </div>,
  document.getElementById("root")
);
