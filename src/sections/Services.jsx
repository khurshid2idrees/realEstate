import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { service } from "../components/export";

const Services = () => {
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
      <div className={`${"light bg-transparent"} pb-20`}>
        <section
          id="services"
          className={`${"light bg-bggray"} lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-center lg:px-20 px-6 py-20 gap-10 `}
        >
          <div className="flex flex-col justify-center items-center gap-4">
          
            <h1
              data-aos="zoom-in"
              className="font-montserrat text-heading md:text-4xl font-semibold leading-10 mt-4 "
            >
              10% Guranteed Rental Returns And High Capital Appreciation
            </h1>
          </div>

          <div
            id="service-box"
            className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-9"
          >
            {service.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                key={index}
                className="bg-white  h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-gold  hover:text-white cursor-pointer"
              >
                <div className="p-6 rounded-full bg-bggray">
                  <item.icon className="text-gold size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
                </div>

                <h1 className="text-black text-[22px] font-semibold ">
                  {item.title}
                </h1>
                <p className="text-lg text-slate-700 ">
                  {item.desc}
                </p>
                <button className="border-b-2 border-gold text-gold font-semibold p-0 ">
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
