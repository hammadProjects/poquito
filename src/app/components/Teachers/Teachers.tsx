"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const teachers = [
  {
    name: "Elana Dezwe",
    subject: "Maths Teacher",
    image: "/teacher-1.svg",
  },
  {
    name: "Svanah Ailorn",
    subject: "Computer Teacher",
    image: "/teacher-2.svg",
  },
];

const Teachers: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % teachers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#18C47D] py-4 sm:py-7 md:py-10" id="admissions">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 relative">
        <div>
          <div className="relative h-[300px] md:h-[350px] w-full flex justify-center items-center">
            {teachers.map((teacher, i) => (
              <div
                key={i}
                className={`absolute bg-white rounded-2xl p-4 w-[90%] md:w-[412px] transition-opacity duration-1000 
              ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"} 
              ${i === 1 ? "rotate-3" : "rotate-0"}`}
              >
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={380}
                  height={245}
                />
                <h5
                  className="text-sm sm:text-base mt-2 sm:mt-4"
                  style={{ fontFamily: "Jua" }}
                >
                  {teacher.name}
                </h5>
                <p className="text-xs sm:text-sm">{teacher.subject}</p>
              </div>
            ))}
          </div>
          <Image src={"/dots.svg"} width={80} height={20} alt="dots" className="mx-auto mt-3" />
        </div>
        <div className="text-white text-center pt-4 md:pt-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Jua" }}
          >
            Our Teachers
          </h2>
          <p className="max-w-[520px] mx-auto text-sm md:text-base font-light mt-3 lg:mt-5 leading-5 sm:leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
