"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { MdRoundaboutRight } from "react-icons/md";
import { GrDashboard } from "react-icons/gr";
import { AiFillAlert } from "react-icons/ai";

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Models", path: "/models", icon: <AiFillAlert/> },
//   { name: "Sign Up", path: "/auth/signup", icon: <IoMdTimer /> },
//   { name: "About", path: "/about", icon: <MdRoundaboutRight /> },
//   { name: "Dashboard", path: "/dashboard", icon: <GrDashboard /> },
];

const Navbar = () => {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `flex items-center gap-2 px-3 py-1 rounded-lg transition-all duration-200 text-sm md:text-base whitespace-nowrap ${
      pathname === path
        ? "bg-white text-green-700"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <div className="bg-gray-900 shadow-md py-2">
      <div className="w-10/12 mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <h2 className="text-white font-bold text-xl md:text-2xl">
            Auth<span className="text-green-500">Space</span>
          </h2>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-2 md:gap-4 font-semibold">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className={linkStyle(link.path)}>
                {link.icon}
                <span className="hidden md:inline">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Button */}
        <Link
          href="/auth/signin"
          className="bg-gray-50 px-4 py-1.5 rounded-lg hover:bg-gray-200 transition"
        >
          Sign In
        </Link>

      </div>
    </div>
  );
};

export default Navbar;