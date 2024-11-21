import React from "react";
import Header from "@/app/Components/Header";
import Service from "@/app/Components/Servcies";
import Card from "@/app/Components/Crad";
import Footer from "@/app/Components/Footer";
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
