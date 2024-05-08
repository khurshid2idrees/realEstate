import React from "react";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import PopularArea from "../sections/PopularArea";
import Properties from "../sections/Properties";
import Services from "../sections/Services";
import Clients from "../sections/Clients";
import Contact from "../sections/Contact";
import { Footer } from "../components/Footer";
import Amenities from "../sections/Amenities";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <PopularArea />
      <Properties />
      <Services />
      {/* <Amenities/> */}
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}
