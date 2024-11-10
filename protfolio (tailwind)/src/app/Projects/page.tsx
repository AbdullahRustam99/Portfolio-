import React from "react";
import Header from "@/Components/Header";
import Projects from "@/Components/Projects";
import Card from "@/Components/Crad";
import Footer from "@/Components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Card text="Projects" dir="Home - Projects" />
        <Projects/>
      <Footer />
    </>
  );
};

export default Home;
