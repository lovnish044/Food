import React from "react";
import web from "../src/images/home-bg.jpg";
import Commom from "./Common";

const About = () => {
  return (
    <>
      <Commom
        name="Enjoy your food with"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;