import React, {useContext, useState} from "react";
import useCategory from "../store/hooks/useCategory";
import { ModalContext } from "../store/providers/ModalContext";
import { Card, Button, Modal } from "react-bootstrap";
import style from "../styles/ShowRecipes.module.css";

const ShowRecipes = ({ quantity }) => {

  const [open, setOpen] = useState(false);
  
  const { allMeals } = useCategory();

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
      setOpen(false);
  }
  const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext);

  const mostrarIngredientes = informacion => {
    let ingredientes = [];
    for(let i = 1; i < 16; i++){
        if( informacion[`strIngredient${i}`] ) {
            ingredientes.push(
                <li> { informacion[`strIngredient${i}`] }  { informacion[`strMeasure${i}`] }</li>
            )
        }
    }

    return ingredientes;
}

  return (
    <>
      {allMeals
        .slice(0, quantity)
        .map(({ idMeal, strMeal, strMealThumb, strArea }) => (
          <div className="col-lg-4" key={idMeal}>
            <Card className={`mb-4 border-0, ${style["show-recipes__card"]}`}>
                  <div className={style["show-recipes__image"]}>
                    <Card.Img variant="top" src={strMealThumb} />
                  </div>
                  <Card.Body className={style["show-recipes__body"]}>
                    <Card.Title style={{ fontSize: "4rem" }}>
                      {strMeal}
                    </Card.Title>
                    <p style={{ fontSize: "2.5rem" }}>{strArea}</p>
                    <button
                        type="button"
                        className="btn btn-block btn-meal"
                        onClick={() => {
                            guardarIdReceta(idMeal);
                            handleOpen();
                        }}
                     >
                         Ver Receta
                     </button>
                  </Card.Body>
              
            </Card>
           
          </div>
        ))}
         <Modal show={open} 
                onHide={()=>{
                  guardarReceta({})
                  handleClose();
                  handleClose()
                }} 
                scrollable={true}>
              <Modal.Header closeButton>
                <Modal.Title>
                 <h1>{informacion.strMeal}</h1> 
                  </Modal.Title>
            
              </Modal.Header>
              <Modal.Body>
                <img className="img-modal my-4" src={informacion.strMealThumb} />
                <h3>Ingredients</h3>
                <ul className="mt-4">
                    { mostrarIngredientes(informacion) }
                </ul>
                <h3>Instructions</h3>
                <h5 className="mt-4">{informacion.strInstructions}</h5>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
    </>
  );
};

export default ShowRecipes;
