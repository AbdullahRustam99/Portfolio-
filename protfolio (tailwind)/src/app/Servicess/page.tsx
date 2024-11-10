import React from "react";
import Header from "@/Components/Header";
import Service from "@/Components/Servcies";
import Card from "@/Components/Crad";
import Footer from "@/Components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Card text="Services" dir="Home - Services" />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
