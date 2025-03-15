import Image from "next/image";
import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="py-10" id="gallery">
      <div className="max-w-[90%] md:max-w-[80%] mx-auto space-y-3">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-3 md:space-y-0 md:space-x-5">
          <h3
            className="text-2xl sm:text-3xl lg:text-5xl"
            style={{ fontFamily: "Jua" }}
          >
            Our Gallery
          </h3>
          <p className="max-w-[550px] text-right text-xs md:text-sm lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 gap-4">
          {/* At sm & xs, all images take full width */}
          {/* At md+, the original layout is restored */}
          <div className="relative w-full h-48 md:h-auto md:col-span-2 md:row-span-1">
            <Image
              priority
              src="/Gallery-1.svg"
              alt="gallery-1"
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="relative w-full h-48 md:h-auto md:col-span-1 md:row-span-2">
            <Image
              src="/Gallery-3.svg"
              alt="gallery-3"
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="relative w-full h-48 md:h-auto md:col-span-2 md:row-span-2">
            <Image
              src="/Gallery-5.svg"
              alt="gallery-5"
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="relative w-full h-48 md:h-auto md:col-span-2 md:row-span-1">
            <Image
              src="/Gallery-2.svg"
              alt="gallery-2"
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="relative w-full h-48 md:h-auto md:col-span-3 md:row-span-1">
            <Image
              src="/Gallery-4.svg"
              alt="gallery-4"
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="relative w-full h-48 md:h-auto md:col-span-1 md:row-span-1">
            <Image
              src="/Gallery-6.svg"
              alt="gallery-6"
              width={160}
              height={80}
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>

          <div className="relative w-full h-48 md:h-auto md:col-span-1 md:row-span-1">
            <Image
              src="/Gallery-7.svg"
              alt="gallery-7"
              width={160}
              height={80}
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
