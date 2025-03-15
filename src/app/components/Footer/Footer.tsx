import Image from "next/image";
import Link from "next/link";
import React from "react";

const socialLinks = [
  { src: "/linkedin.svg", href: "/" },
  { src: "/whatsapp.svg", href: "/" },
  { src: "/Insta.svg", href: "/" },
  { src: "/snapchat.svg", href: "/" },
];

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-[#0F73EC]">
      <div className="pt-4 sm:pt-7 md:pt-10 lg:pt-15 pb-3">
        <div className="grid grid-cols-8 max-w-[90%] mx-auto">
          <div className="col-span-8 md:col-span-4 lg:col-span-5">
            <Image
              src={"/logo-footer.svg"}
              alt="logo-footer"
              width={300}
              height={300}
              className="mx-auto md:mx-0"
            />
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-3 text-center sm:text-left space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 pt-8 gap-3 sm:gap-5">
              <div className="flex flex-col gap-1 sm:gap-3">
                {[
                  { title: "Contact Us", href: "/" },
                  { title: "Teachers", href: "/" },
                ].map((item, index) => (
                  <Link href={item.href} key={index} className="">
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-1 sm:gap-3">
                {[
                  { title: "About Us", href: "/" },
                  { title: "Curriculum", href: "/" },
                  { title: "Admissions", href: "/" },
                  { title: "Parents", href: "/" },
                ].map((item, index) => (
                  <Link href={item.href} key={index} className="">
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-1 sm:gap-3">
                {[
                  { title: "Documents", href: "/" },
                  { title: "The Nursery", href: "/" },
                  { title: "Links", href: "/" },
                ].map((item, index) => (
                  <Link href={item.href} key={index} className="">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <p>
              <span className="font-bold">Address:</span> 7 RED Lion Square
              Wandsworth High Street SW18 4LS
            </p>
          </div>
        </div>
        <div className="bg-white w-full h-[1px] my-5" />
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-[90%] mx-auto space-y-3 text-center sm:text-left">
          <small>
            Copyright | All Rights Reserved | Poquito Kids Nurseries Limited{" "}
          </small>
          <div className="flex gap-3">
            {socialLinks.map((link, inedx) => (
              <Link
                href={link.href}
                key={inedx}
                className="flex items-center justify-center bg-white w-8 h-8 rounded-full p-1"
              >
                <Image src={link.src} alt="social" width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
