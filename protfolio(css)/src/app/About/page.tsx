import React from "react";
import Header from "@/app/Components/Header";
import About from "@/app/Components/About";
import Card from "@/app/Components/Crad";
import Footer from "@/app/Components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Card text="ABOUT" dir="Home - About" />
      <About />
      <Footer />
    </>
  );
};

export default Home;
