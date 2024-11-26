import { MealProvider } from "./store/providers/MealProvider";
import Hero from "./components/Hero";
import { Container, Row } from "react-bootstrap";
import ShowRecipes from "./components/ShowRecipes";
import Layout from "./components/Layout";
import { Helmet } from "react-helmet";
import Favicon from "./images/favicon.ico";
import ModalProvider from "./store/providers/ModalContext";

function App() {
  return (
    <>
      <Helmet>
        <title>Mr. Kitchen | API consumer</title>
        <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
      </Helmet>
      <ModalProvider>
        <MealProvider>
        <Layout>
          <Hero />
          <section>
            <Container>
              <Row className="justify-content-md-center">
                <h1 className="text-center mb-5 second-font">
                  Especial Recipes
                </h1>
                <ShowRecipes size={4} quantity={6} />
              </Row>
            </Container>
          </section>
        </Layout>
        </MealProvider>
      </ModalProvider>
    </>
  );
}

export default App;
