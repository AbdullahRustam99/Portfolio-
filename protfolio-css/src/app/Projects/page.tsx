import React from "react";
import Header from "@/app/Components/Header";
import Projects from "@/app/Components/Projects";
import Card from "@/app/Components/Crad";
import Footer from "@/app/Components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Card text="Projects" dir="Home - Projects " />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
