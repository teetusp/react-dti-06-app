import React from "react";
import Hello from "../assets/imgA/hello.png";
import Profile from "../assets/imgA/profile.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function MyPageA() {
  return (
    <>
      <div
        style={{ fontFamily: "Monomaniac One" }}
        className="w-full h-lvh flex flex-col items-center bg-black"
      >
        {/* ส่วนที่ 1 Menu */}
        <div className="w-8/12 mx-auto flex mt-20">
          <div className="flex-1 flex gap-10 text-xl">
            <a href="#" className="text-white">
              Portfolio
            </a>
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Get In Touch
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={Hello} alt="hello" />
          </div>
          <div className="flex-1 text-white flex justify-end gap-5 text-2xl">
            <FaGithub />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="flex-1 flex flex-col mt-20 text-white text-center">
          <h1 className="text-4xl ">Somrak Sudyodjing</h1>
          <h1 className="text-4xl text-green-500 mt-2">Freelance Web Developer</h1>
          <h1 className="text-4xl mt-2">Based In THAILAND</h1>
        </div>
        <div className="mt-5 mb-10">
          <img src={Profile} alt="profile" className="rounded-full border-2 border-green-500 object-cover p-2" />
        </div>
      </div>
    </>
  );
}
