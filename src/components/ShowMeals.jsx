import React from "react";
import { Row } from "react-bootstrap";
import useCategory from "../store/hooks/useCategory";
import CardFood from "./CardFood";

const ShowMeals = () => {
  const { meals } = useCategory();
  return (
    <Row className="mt-4">
      {meals.map((meal) => (
        <CardFood key={meal.idMeal} meal={meal} />
      ))}
    </Row>
  );
};

export default ShowMeals;
