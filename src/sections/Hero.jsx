


import React, { useEffect } from "react";
import heroimg from "../assets/images/hero8.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);


  return (
    <>
      <>
        <nav
          id="nav"
          className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
        >
          
          
        </nav>
      
        <header
          id="up"
          className=" bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
          style={{ backgroundImage: `url( ${heroimg})` }}
        >
          {/* Overlay Background + Center Control */}
          <div
            className="h-screen bg-opacity-0 bg-black flex items-center justify-center"
            // style={{ background: "rgba(0,0,0,0.5)" }}
          >
            <div className="mx-2 text-center">
              <h1 className="text-gold font-extrabold text-4xl xs:text-5xl md:text-6xl">
                <span className="text-goldd">Shoba</span> One
              </h1>
              <h2 className="text-bggray font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                Dubai's <span className="text-white">Hottest</span> New{" "}
                <span className="text-white">Launch</span> 
              </h2>
              <p></p>
              <a href="#myform">
              <div className="inline-flex mt-6">
                <button  className=" p-2 my-5 mx-2 bg-gold hover:border-none font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
                  Make An Enquiry
                </button>
                {/* <a href="#about">
                  <button className="p-2 my-5 mx-2 bg-transparent border-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-indigo-700 rounded hover:border-indigo-800 font-bold text-indigo-800 shadow-md transition duration-500 md:text-lg">
                    Learn More
                  </button>
                </a> */}
              </div>
              </a>
            </div>
          </div>
        </header>
      </>
    </>
  );
};

export default Hero;
