import React from "react";
import Header from "@/Components/Header";
import About from "@/Components/About";
import Card from "@/Components/Crad"
import Footer from "@/Components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Card text="ABOUT" dir="Home - About"/>
      <About />
      <Footer />
    </>
  );
};

export default Home;
