"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = ["/contact-1.svg", "/contact-2.svg", "/contact-3.svg"];

const ContactUs: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-4 md:py-10 lg:py-15" id="contact">
      <div className="max-w-[90%] lg:max-w-[83%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 relative">
        {/* Fading Image Section */}
        <div className="relative max-w-[560px] h-[300px] sm:h-[594px] rounded-2xl overflow-hidden">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="child"
              width={560}
              height={594}
              layout="responsive"
              className={`max-w-[100%] absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              } rounded-2xl`}
            />
          ))}
        </div>

        {/* Form Section */}
        <div>
          <h3
            className="text-2xl sm:text-3xl lg:text-5xl md:absolute top-0 xl:top-5 left-80"
            style={{ fontFamily: "Jua" }}
          >
            Have questions? We&apos;re here to help, reach
          </h3>
          <div className="md:pt-25">
            <h3
              className="text-2xl sm:text-3xl lg:text-5xl mb-3 lg:mb-6"
              style={{ fontFamily: "Jua" }}
            >
              out to us today!
            </h3>
            {/* Form */}
            <div>
              <div>
                <label className="text-xs" htmlFor="fName">
                  First Name
                </label>
                <input
                  type="text"
                  id="fName"
                  className="mt-1 bg-[#F5F5F5] w-full py-2 px-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="grow-1">
                  <label className="text-xs" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 bg-[#F5F5F5] w-full py-2 px-2 rounded-sm"
                  />
                </div>
                <div className="grow-1">
                  <label className="text-xs" htmlFor="contactNo">
                    Contact No
                  </label>
                  <input
                    type="tel"
                    id="contactNo"
                    className="mt-1 bg-[#F5F5F5] w-full py-2 px-2 rounded-sm"
                  />
                </div>
              </div>
              <div className="grow-1">
                <label className="text-xs" htmlFor="message">
                  Your message
                </label>
                <textarea
                  rows={3}
                  id="message"
                  className="mt-1 bg-[#F5F5F5] w-full py-2 px-2 rounded-sm"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="text-white mt-5 sm:mt-7 md:mt-10 px-4 md:px-8 py-2.5 text-sm  md:text-xl bg-[#F4962B] rounded-full shadow-2xl"
                  style={{ fontFamily: "Jua" }}
                >
                  Make an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
