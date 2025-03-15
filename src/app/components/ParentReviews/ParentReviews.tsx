import Image from "next/image";
import React from "react";

const ParentReviews = () => {
  return (
    <section
      id="documents"
      style={{ backgroundImage: `url(${"/parents.svg"})` }}
      className="bg-cover bg-center bg-no-repeat py-3 sm:py-7 md:py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-7 max-w-[90%] md:max-w-[80%] mx-auto">
        <div className="bg-[#F7F7F7] py-5 px-4 col-span-3">
          <h3
            className="text-2xl md:text-5xl mb-14 md:mb-20"
            style={{ fontFamily: "Jua" }}
          >
            Parents Reviews
          </h3>
          <div className="px-3 md:px-5">
            <p className="text-sm max-w-[370px] relative before:content-['\201C'] before:text-yellow-500 before:text-8xl before:absolute before:top-[-50px] before:-left-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.{" "}
            </p>
            <p className="mt-5">
              <span className="font-bold">Lara J., </span>
              <br /> Head of Sales and Marketing
            </p>
          </div>
        </div>
        <div className="relative col-span-5 lg:col-span-3 min-h-[320px] h-full">
          <div className="absolute right-0 sm:right-10">
            <Image
              src={"/special-care/pink-star.svg"}
              alt="star"
              width={20}
              height={20}
              className="flower-opacity-in block mt-2 ml-2 star-1"
            />
            <Image
              src={"/special-care/pink-star.svg"}
              alt="star"
              width={40}
              height={40}
              className="flower-opacity-in block mt-2 ml-2 star-2"
            />
            <Image
              src={"/special-care/pink-star.svg"}
              alt="star"
              width={20}
              height={20}
              className="flower-opacity-in block -mt-2 sm:mt-2 ml-2 star-1"
            />
          </div>
          <Image src={"/parents-reviews.svg"} alt="girrafe" layout="fill" />
          <div className="absolute sm:left-10 bottom-0 flex rotate-45">
            <Image
              src={"/special-care/blue-star.png"}
              alt="star"
              width={30}
              height={30}
              className="scale-down block"
            />
            <Image
              src={"/special-care/pink-star.svg"}
              alt="star"
              width={20}
              height={20}
              className="scale-up block mt-2 ml-2"
            />
            <Image
              src={"/special-care/green-star.svg"}
              alt="star"
              width={30}
              height={30}
              className="scale-down block mt-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentReviews;
