import React, { useEffect } from "react";
import area1 from "../assets/images/sobha2.webp";
import area2 from "../assets/images/sobha3.webp";
import area3 from "../assets/images/hero2.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularArea = () => {
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
      <div className={`${"light bg-transparent"}`}>
        <section
          className={`${"light bg-white"} lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}
        >
          <div
            id="top"
            className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-centre gap-8"
          >
            <div>
              <h1 data-aos="zoom-in" className="text-black ">
                POPULAR AREAS
              </h1>
              <h1
                data-aos="zoom-in"
                className="font-montserrat text-heading md:text-4xl font-semibold leading-10 mt-4 "
              >
                Explore Most Popular Areas
              </h1>
            </div>
            <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                style={{ backgroundImage: `url(${area1})` }}
                className="h-[400px] bg-cover bg-center rounded-xl"
              ></div>
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                style={{ backgroundImage: `url(${area2})` }}
                className="h-[400px] bg-cover bg-center rounded-xl"
              ></div>
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                style={{ backgroundImage: `url(${area3})` }}
                className="h-[400px] bg-cover bg-center rounded-xl"
              ></div>
            </div>
          </div>
        
        </section>
      </div>
    </>
  );
};

export default PopularArea;
