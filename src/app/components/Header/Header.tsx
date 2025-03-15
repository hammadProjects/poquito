"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-6 relative">
      <div className="h-18 max-w-[90%] lg:max-w-[85%] mx-auto px-2 sm:px-4 py-4 bg-[#F7F7F7] rounded-2xl flex justify-between items-center">
        <div>
          <Image
            src={"/poquito-logo.svg"}
            alt="Logo"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex lg:gap-4 xl:gap-7">
          {[
            { title: "About us", href: "#about" },
            { title: "Curriculum", href: "#curriculum" },
            { title: "Admissions", href: "#admissions" },
            { title: "Gallery", href: "#gallery" },
            { title: "Documents", href: "#documents" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <Link
          href={"#contact"}
          className="hidden lg:block bg-[#0F73EC] py-2 px-6 text-white rounded-full text-xl"
          style={{ fontFamily: "Jua" }}
        >
          Contact us
        </Link>

        {/* Mobile */}
        <button
          className="lg:hidden z-50 w-10 h-10 flex justify-center items-center"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-xl text-gray-800">✖</span>
          ) : (
            <Image
              src={"/menu-icon.svg"}
              alt="menu-icon"
              width={25}
              height={25}
            />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mt-20 space-y-5 text-lg text-center text-gray-800">
          {[
            { title: "About us", href: "#about" },
            { title: "Curriculum", href: "#curriculum" },
            { title: "Admissions", href: "#admissions" },
            { title: "Gallery", href: "#gallery" },
            { title: "Documents", href: "#documents" },
          ].map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="block p-2 hover:bg-gray-200 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-transparent z-30 transition-opacity"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
