import Image from "next/image";
import React from "react";

const cards = [
  {
    src: "hero/P.svg",
    class: "absolute bottom-0 left-1/2 transform -translate-x-[140px] md:-translate-x-[340px] w-[48.62px] md:w-[108.62px]",
  },
  {
    src: "hero/O.svg",
    class: "absolute bottom-0 left-1/2 transform -translate-x-[100px] md:-translate-x-[260px] w-[48.62px] md:w-[108.62px] ",
  },
  {
    src: "hero/Q.svg",
    class: "absolute bottom-0 left-1/2 transform -translate-x-[60px] md:-translate-x-[180px] w-[48.62px] md:w-[108.62px]",
  },
  {
    src: "hero/U.svg",
    class: "absolute bottom-0 left-1/2 transform -translate-x-[20px] md:-translate-x-[90px] w-[48.62px] md:w-[108.62px]",
  },
  {
    src: "hero/I.svg",
    class: "absolute bottom-0 left-1/2 transform translate-x-[15px] md:-translate-x-[0px] w-[48.62px] md:w-[108.62px]",
  },
  {
    src: "hero/T.svg",
    class: "absolute bottom-0 left-1/2 transform translate-x-[54px] md:translate-x-[90px] w-[48.62px] md:w-[108.62px]",
  },
  {
    src: "hero/O.svg",
    class: "absolute bottom-0 left-1/2 transform translate-x-[89px] md:translate-x-[175px] w-[48.62px] md:w-[108.62px]",
  },
];

const Hero: React.FC = () => {
  return (
    <section className="h-[350px]">
      <div className="max-w-[70%] mx-auto text-center relative">
        <Image
          src={"/cloud.svg"}
          alt="cloud"
          width={60}
          height={60}
          className="absolute top-0"
          priority
        />
        <div className="">
          <Image
            className="mx-auto move-down animate-move-down delay-third"
            src={"hero/poquito.svg"}
            alt="poquito-giraffe"
            width={80}
            height={80}
          />

          {/* Cards */}

          <div className="bg-red-200 relative mx-auto mt-11 md:mt-21 z-[-10]">
            {cards.map((card, index, arr) => {
              // add animate class
              card.class +=
                " animate-move-right move-right " +
                `delay-${arr.length - index}s`;

              return (
                <Image
                  key={index}
                  src={card.src}
                  className={card.class}
                  alt={card.src}
                  width={50}
                  height={50}
                  priority
                />
              );
            })}
          </div>
        </div>

        <h5 className="uppercase text-amber-600 text-[18px] space-x-2 font-semibold animate-move-up delay-second">
          <span>k i d s</span> <span>n u r s e r i e s</span>
        </h5>
        <p
          className="uppercase text-blue-500 space-x-2 animate-move-up delay-last"
          style={{ fontFamily: "cursive" }}
        >
          <span>l e a r n</span> , <span>p l a y</span> <span>a n d</span>{" "}
          <span>g r o w</span>
          <span> w i t h</span>
          <span> u s</span>
        </p>
        <Image
          src={"/bird.svg"}
          alt="bird"
          width={60}
          height={60}
          className="absolute right-0"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
