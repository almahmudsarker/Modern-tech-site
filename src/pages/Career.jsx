import React from "react";
import Navbar from "./Navbar";
import Container from "../Container";
import Banner from "./Banner";
import Articles from "./Articles";
import Card from "./Card";
import AdAbout from "./AdArticle/AdAbout";
import CareerFooter from "./CareerFooter";
import Particle from "../Components/Particle";

const Career = () => {
  return (
    <>
      <Particle />
      <Container>
        <Navbar />
        <Banner />
        <Articles />
        <Card />
        <AdAbout />
        <CareerFooter />
      </Container>
    </>
  );
};

export default Career;
