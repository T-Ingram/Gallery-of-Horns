import React from "react";
import HornedBeast from "./HornedBeast";

function Gallery() {
  // You can set the properties with your desired values
  const hornedBeast1 = {
    title: "Gazelle",
    imageUrl: "https://example.com/image1.jpg",
    description: "A graceful Gazelle with beautiful horns."
  };

  const hornedBeast2 = {
    title: "Mountain Goat",
    imageUrl: "https://example.com/image2.jpg",
    description: "This is an amazing Goat with fantastic horns."
  };

  return (
    <div>
      <HornedBeast {...hornedBeast1} />
      <HornedBeast {...hornedBeast2} />
    </div>
  );
}

export default Gallery;
