import Image from "next/image";
import React from "react";

type cardDataType = {
  title: string;
  age: string;
  description: string;
  bgColor: string;
};

const cardData: cardDataType[] = [
  {
    title: "Infants",
    age: "1-2 years old",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    bgColor: "#F4962B",
  },
  {
    title: "Toddlers",
    age: "1-2 years old",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    bgColor: "#19CBD5",
  },
  {
    title: "Kids",
    age: "1-2 years old",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    bgColor: "#F65CC7",
  },
];

const Curriculum: React.FC = () => {
  return (
    <section
      className="py-5 sm:py-7 md:py-10 lg:py-15 relative"
      id="curriculum"
    >
      <Image
        src={"/curriculam/rocket.svg"}
        alt="right-flower"
        width={100}
        height={100}
        className="absolute bottom-1/4 left-10 rocket-motion"
      />

      <div className="max-w-[90%] lg:max-w-[80%] mx-auto space-y-5">
        <div className="relative">
          <Image
            src={"/curriculam/flower-1.svg"}
            alt="flower-1"
            width={30}
            height={30}
            className="absolute top-0 -left-3 sm:left-0 flower-opacity-in"
          />
          <h3
            className="text-2xl sm:text-4xl md:text-5xl text-center"
            style={{ fontFamily: "Jua" }}
          >
            Our Exclusive Curriculum
          </h3>
          <p className="max-w-[874px] mx-auto mt-4 text-center text-xs sm:text-sm md:text-base lg:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text{" "}
          </p>
          <Image
            src={"/curriculam/rightflower.svg"}
            alt="flower-1"
            width={20}
            height={20}
            className="absolute -bottom-10 sm:bottom-0 right-0 flower-opacity-in z-10"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 relative">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="text-left text-white py-10 px-6 rounded-2xl"
              style={{ backgroundColor: card.bgColor }}
            >
              <h5 className="text-xl sm:text-2xl" style={{ fontFamily: "Jua" }}>
                {card.title}
              </h5>
              <p className="text-sm sm:text-base mb-5">{card.age}</p>
              <small className="text-xs sm:text-sm">{card.description}</small>
            </div>
          ))}
          <Image
            src={"/curriculam/flower-3.svg"}
            alt="right-flower"
            width={60}
            height={60}
            className="absolute -bottom-6 -right-5"
          />
        </div>
      </div>
      <Image
        src={"/curriculam/baloon.svg"}
        alt="right-flower"
        width={60}
        height={60}
        className="absolute bottom-1/4 right-10 z-10 balloon-motion"
      />
    </section>
  );
};

export default Curriculum;
