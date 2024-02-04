import React from "react";
import HornedBeast from "./HornedBeast";

function Gallery() {
  // You can set the properties with your desired values
  const gazelle = {
    title: "Gazelle",
    imageUrl: "https://pixexid.com/api/download/image/a-4k-ultra-hd-mobile-wallpaper-featuring-a-majestic-and-graceful-pronghorn-antel-jv6mql1t.jpeg",
    description: "A graceful Gazelle with beautiful horns."
  };

  const goat = {
    title: "Mountain Goat",
    imageUrl: "https://pixexid.com/api/download/image/a-stunning-goat-in-the-wild-from-nature-c2edx8sg.jpeg",
    description: "This is an amazing Goat with fantastic horns."
  };

  return (
    <div>
      <HornedBeast {...gazelle} />
      <HornedBeast {...goat} />
    </div>
  );
}

export default Gallery;
