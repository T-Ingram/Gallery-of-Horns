import React from "react";
import HornedBeast from "./HornedBeast";
import data from "/src/data.json";

function Gallery() {
  return (
    <div>
      {data.map((item) => (
        <HornedBeast
          key={item._id}
          title={item.title}
          imageUrl={item.image_url}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Gallery;
