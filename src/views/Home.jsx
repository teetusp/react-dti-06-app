import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/imgH/img1.png";
import img2 from "../assets/imgH/img2.png";
import img3 from "../assets/imgH/img3.png";
import img4 from "../assets/imgH/img4.png";

export default function Home() {
  return (
    <>
      <div
        style={{ fontFamily: "Roboto Mono" }}
        className="w-full h-screen bg-[#91FFB2]">
        {/*ส่วนบน*/}
        <div className="w-8/12 mx-auto flex px-20 py-20 justify-between">
          {/*ส่วนที่ 1*/}
          <div className="flex flex-col">
            <div>
              <h1 className="text-5xl font-bold">My Web Design by</h1>
              <h1 className="text-5xl font-bold">React + TailwindCSS</h1>
            </div>
            <div className="mt-7">
              <span className="text-[#333333]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                animi, explicabo a sed at maxime perspiciatis, velit illo, hic
                doloremque dicta maiores sunt numquam dolore? Provident aut sed
                maiores adipisci.
              </span>
            </div>
            <div className="mt-15">
              <a
                href="#"
                className="bg-[#333333] text-white rounded-4xl py-4 px-8 hover:bg-[#282828]"
              >
                Follow Me
              </a>
            </div>
            <div className="mt-25 flex">
              <Link to="/MypageA">
                <img src={img1} alt="img1" className="w-82 h-min mr-9" />
              </Link>
              <Link to="/MypageB">
                <img src={img2} alt="img2" className="w-82 h-min" />
              </Link>
            </div>
          </div>
          {/*ส่วนที่ 2*/}
          <div>
            <Link to="/MypageC">
              <img src={img3} alt="img3" className="w-59 h-min" />
            </Link>
          </div>
          {/*ส่วนที่ 3*/}
          <div>
            <Link to="/MypageD">
              <img src={img4} alt="img4" className="w-36 h-min" />
            </Link>
          </div>
        </div>
        {/*ส่วนล่าง*/}
        <div className="flex flex-col justify-center items-center text-lg">
          <span>(รูปและเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น)</span>
          <span>Created by Teetus SAU</span>
          <span>Copyright © 2025 WoW WoW WoW</span>
        </div>
      </div>
    </>
  );
}
