import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      navigate('/thanks');
    }, 2000); 
  };

  return (
    <>
      <div className={`${"light bg-transparent"} pb-20`}>
        <section
          id="contact"
          className={`${"light bg-bggray"} lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
        >
          <form
            action="https://formsubmit.co/umarkhurshid3@gmail.com"
            method="post"
            data-aos="zoom-in"
            id="myform"
            className="bg-white  p-10 flex flex-col
          justify-center items-start gap-4 rounded-xl "
          >
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_next"
              value="https://kdidrees.netlify.app/thanks"
            ></input>
            <h1 className="text-2xl text-black font-semibold ">
              Book a Virtual Tour by Filling the Form Below.
            </h1>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name here"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your valid email"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            />
            <input
              type="tel"
              name="mobile"
              maxLength={12}
              placeholder="Enter your valid mobile number"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            />
            <textarea
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Enter your message here..."
            ></textarea>
            <button
              type="submit"
              onClick={handleClick}
              className="bg-gold w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black  cursor-pointer"
            >
              SEND EMAIL
            </button>
          </form>
          <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
            <h1 data-aos="zoom-in" data-aos-delay="200" className="tex-black">
              {/* REACH US */}
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="400"
              className="text-black text-[40px] font-semibold leading-10 "
            >
              Dummy content
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="600"
              className="md:text-xl text-gray-600 text-justify "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              consequuntur unde alias at et. Quae sint, voluptatibus obcaecati
              dolorem cupiditate quisquam veritatis consequatur dolorum, eaque
              alias rerum maiores similique quam.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
