import { useContext } from "react";
import MealContext from "../providers/MealProvider";

const useCategory = () => {
  return useContext(MealContext);
};

export default useCategory;
