import React, { useState } from "react";
import HornedBeast from "./HornedBeast";
import data from "/src/data.json";
import { Row } from "react-bootstrap";
import HornFilter from "./HornFilter";

function Gallery() {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = filter === "all" ? data : data.filter(item => item.horns.toString() === filter);

  return (
    <div>
      <HornFilter handleFilterChange={handleFilterChange} />
      <Row>
        {filteredData.map((item) => (
          <HornedBeast
            key={item._id}
            title={item.title}
            imageUrl={item.image_url}
            description={item.description}
          />
        ))}
      </Row>
    </div>
  );
}

export default Gallery;
