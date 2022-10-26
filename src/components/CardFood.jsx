import React from "react";
import { Col, Card } from "react-bootstrap";
import styles from "../styles/CardFood.module.css";
// import Image from "next/image";

const CardFood = ({ meal }) => {
  const { strMealThumb, strMeal } = meal;
  return (
    <Col md={4} lg={3}>
      <Card className="mb-4 border-0">
        <img layout="fill" src={strMealThumb} className={styles.card__img} />
        <Card.Body>
          <Card.Title style={{ fontSize: "14px" }}>{strMeal}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardFood;
