import React from "react";
import HornedBeast from "./HornedBeast";
import data from "/src/data.json";
import { Row } from "react-bootstrap";

function Gallery() {
  return (
    <Row>
      {data.map((item) => (
        <HornedBeast
          key={item._id}
          title={item.title}
          imageUrl={item.image_url}
          description={item.description}
        />
      ))}
    </Row>
  );
}

export default Gallery;