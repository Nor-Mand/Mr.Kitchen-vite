import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MealProvider } from "../store/providers/MealProvider";
import ShowStory from "../components/ShowStory";
import BannerSection from "../components/BannerSection";
import Banner from "../images/banner-story.jpg";
import Layout from "../components/Layout";
const Story = () => {
  return (
    <MealProvider>
      <Layout>
        <BannerSection banner={Banner} title={"Story"} />
        <section>
          <Container>
            <Row className="justify-content-md-center">
              <Col lg={9}>
                <ShowStory />
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </MealProvider>
  );
};

export default Story;
