import React, {useContext, useState} from "react";
import { Col, Card,Button, Modal } from "react-bootstrap";
import styles from "../styles/CardFood.module.css";
import { ModalContext } from "../store/providers/ModalContext";
// import Image from "next/image";

const CardFood = ({ meal }) => {
  
  const { strMealThumb, strMeal, idMeal } = meal;

  const [open, setOpen] = useState(false);

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
    <Col md={4} lg={3}>
      <Card className="mb-4 border-0">
        <img layout="fill" src={strMealThumb} className={styles.card__img} />
        <Card.Body>
          <Card.Title style={{ fontSize: "14px" }}>{strMeal}</Card.Title>
          <button
                        type="button"
                        className="btn btn-block btn-meal"
                        onClick={() => {
                            guardarIdReceta(idMeal);
                            handleOpen();
                        }}
                     >
                         see recipe
                     </button>
        </Card.Body>
      </Card>
    </Col>
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

export default CardFood;
