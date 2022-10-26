import React from "react";
import Image from "next/image";
import useCategory from "../store/hooks/useCategory";

const RecipeId = () => {
  const { recipe } = useCategory();
  return (
    <>
      {/* {recipe.map(
        ({ idMeal, strMealThumb, strArea, strMeal, strInstructions }) => (
          <div key={idMeal}>
            <p>id: {idMeal}</p>
            <Image src={strMealThumb} width={200} height={200} />
            <h5>Country: {strArea}</h5>
            <h1>Name: {strMeal}</h1>
            <p>Description: {strInstructions}</p>
          </div>
        )
      )} */}
    </>
  );
};

export default RecipeId;
