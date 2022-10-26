import React, { useState } from "react";

// Import Bootstrap components
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategory from "../store/hooks/useCategory";

const FormData = () => {
  const { categories, getMeal } = useCategory();

  const [search, setSearch] = useState({
    meal: "",
    category: "",
  });

  const [alert, setAlert] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    setAlert("");
    getMeal(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alert && <Alert variant="danger text-center">{alert}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className="mt-3">
            <Form.Control
              id="meal"
              type="text"
              placeholder="Search for recipes..."
              name="meal"
              value={search.meal}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mt-3">
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>- Choose Category -</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group className="mt-3">
            <Button
              variant="primary"
              className="text-uppercase w-100"
              type="submit"
            >
              Search
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default FormData;
