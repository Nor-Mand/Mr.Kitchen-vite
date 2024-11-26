import react, { createContext, useEffect, useState } from "react";
import axios from "axios";

const MealContext = createContext();

const MealProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [allMeals, setAllMeals] = useState([]);
  const [recipe, setRecipe] = useState([]);

  const getCategory = async () => {
    try {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
      const { data } = await axios(url);
      setCategories(data.categories);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getMeal = async (search) => {
    try {
      const url = !search ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=pie&c=Dessert` :
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search.meal}&c=${search.category}`
      const { data } = await axios(url);
      setMeals(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllMeals = async () => {
    try {
      const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      const { data } = await axios(url);
      setAllMeals(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getMealsById = async () => {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
      const { data } = await axios(url);
      setRecipe(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategory();
    getMeal();
    getAllMeals();
    getMealsById();
  }, []);

  return (
    <MealContext.Provider
      value={{
        categories,
        meals,
        getMeal,
        allMeals,
        recipe,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export { MealProvider };

export default MealContext;
