import React from "react";
import useCategory from "../store/hooks/useCategory";
import { Card } from "react-bootstrap";
import style from "../styles/ShowRecipes.module.css";

const ShowRecipes = ({ quantity }) => {
  const { allMeals } = useCategory();

  return (
    <>
      {allMeals
        .slice(0, quantity)
        .map(({ idMeal, strMeal, strMealThumb, strArea }) => (
          <div className="col-lg-4" key={idMeal}>
            <Card className={`mb-4 border-0, ${style["show-recipes__card"]}`}>
              <a
                href={`/meals/${idMeal}-${strMeal
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <a>
                  <div className={style["show-recipes__image"]}>
                    <Card.Img variant="top" src={strMealThumb} />
                  </div>
                  <Card.Body className={style["show-recipes__body"]}>
                    <Card.Title style={{ fontSize: "4rem" }}>
                      {strMeal}
                    </Card.Title>
                    <p style={{ fontSize: "2.5rem" }}>{strArea}</p>
                  </Card.Body>
                </a>
              </a>
            </Card>
          </div>
        ))}
    </>
  );
};

export default ShowRecipes;
