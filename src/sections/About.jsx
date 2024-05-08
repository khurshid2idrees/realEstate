import React, { useEffect } from "react";
import aboutimg from "../assets/images/sobha2.webp";
import { Aboutdata } from "../components/export";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      <section
        id="about"
        className={`${"light bg-transparent"} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
      >
        <div>
          <img
            data-aos="zoom-in"
            src={aboutimg}
            alt="about image"
            className="rounded-2xl lg:w-[500px] lg:h-[600px]"
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-8">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-black md:text-3xl text-xl font-semibold md:leading-10 "
          >
            Sobha One - Perfect Fusion Of Luxury & Golf
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className="md:text-base text-textColor  text-justify"
          >
            Introducing exclusive collection of 1 to 4 bedroom apartments and
            each unit is meticulously crafted facing lush green private golf
            course along with leisure amenities nestled at the podium level.
          </p>

          <div class="md:flex md:items-start md:-mx-4">
            <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4  "></span>

            <div class="mt-0 md:mx-4 md:mt-0">
              {Aboutdata.map((data) => (
                <div
                  key={data.id}
                  className="mt-4 shadow-xl rounded-lg p-4"
                  style={{ boxShadow: "0px 0px 10px 0px #ccab5c" }}
                >
                  <h1 class="text-2xl font-semibold text-gray-700 capitalize ">
                    {data.heading}
                  </h1>

                  <p class="mt-2 text-gray-500 ">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
