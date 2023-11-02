import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import BlackBox from "../BlackBox/BlackBox";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <BlackBox></BlackBox>
      <Features></Features>
    </div>
  );
};

export default Home;
