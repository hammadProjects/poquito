import Image from "next/image";
import React from "react";

const MakeAppointment: React.FC = () => {
  return (
    <section className="bg-[#0F73EC] text-white py-10 px-3 lg:py-25">
      <div className="text-center max-w-[90%] md:max-w-[60%] mx-auto relative">
        <Image
          src={"/starts-pink.svg"}
          alt="stars"
          width={100}
          height={100}
          className="absolute top-[-40px] left-[-10px]"
          priority
        />
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
          style={{ fontFamily: "Jua" }}
        >
          Bright Futures start here
        </h2>
        <p className="text-sm md:text-xl font-light mt-3 md:mt-5">
          Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text.
        </p>
        <button
          className="mt-5 sm:mt-7 md:mt-10 px-4 md:px-8 py-2.5 text-sm  md:text-xl bg-[#F4962B] rounded-full shadow-2xl"
          style={{ fontFamily: "Jua" }}
        >
          Make an Appointment
        </button>
        <div className="absolute bottom-10 right-10">
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
            className="flower-opacity-in block mt-2 ml-2 star-1"
          />
        </div>
      </div>
    </section>
  );
};
export default MakeAppointment;
