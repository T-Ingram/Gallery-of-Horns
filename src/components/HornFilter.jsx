import React from "react";
import { Form } from "react-bootstrap";

function HornFilter({ handleFilterChange }) {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Filter by Number of Horns:</Form.Label>
        <Form.Control as="select" onChange={handleFilterChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
          <option value="all">All</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default HornFilter;
