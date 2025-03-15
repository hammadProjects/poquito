import Image from "next/image";
import React from "react";

const SpecialCare: React.FC = () => {
  return (
    <section>
      <div
        className="max-w-[90%] lg:max-w-[70%] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-0"
        id="about"
      >
        <div className="flex justify-center items-center relative">
          <div className="absolute right-10 -top-10 sm:top-0 flex">
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
          <div className="animated-bg bg-[#F4962B] rounded-full overflow-hidden">
            <Image
              src={"/special-care.svg"}
              alt="kids"
              width={340}
              height={300}
            />
          </div>
          <div className="absolute -left-1 sm:left-10 -bottom-2 sm:bottom-0">
            <Image
              src={"/special-care/pink-puzzle.svg"}
              alt="star"
              width={30}
              height={30}
              className="puzzle-scale-up"
            />
            <Image
              src={"/special-care/blue-puzzle.svg"}
              alt="star"
              width={30}
              height={30}
              className="puzzle-scale-up"
            />
          </div>
        </div>
        <div className="py-5 md:py-10">
          <h3
            className="max-w-[430px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Jua" }}
          >
            Taking Special care for every{" "}
            <span className="text-blue-400">c</span>
            <span className="text-orange-400">h</span>
            <span className="text-green-400">i</span>
            <span className="text-pink-400">l</span>
            <span className="text-[#19CBD5]">d</span>
          </h3>
          <p
            className={`text-xs md:text-sm lg:text-base font-light mt-4 max-w-[520px]`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
export default SpecialCare;
