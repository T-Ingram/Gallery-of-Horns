import React, { useState } from "react";
import { Col } from "react-bootstrap";

function HornedBeast(props) {
  const [favorite, setFavorites] = useState(0);

  const handleClick = () => {
    setFavorites(favorite + 1);
  };

  return (
    <Col sm={6} md={4} lg={3}>
      <div>
        <h2>{props.title}</h2>
        <img
          src={props.imageUrl}
          alt={props.title}
          title={props.title}
          style={{ width: "100%", height: "200px" }}
        />
        <p>{props.description}</p>
        <button onClick={handleClick}>
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          Favorite: {favorite}
        </button>
      </div>
    </Col>
  );
}

export default HornedBeast;