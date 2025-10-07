import React from "react";
import Img1 from "../assets/imgH/img1.png";
import Img2 from "../assets/imgH/img2.png";
import Img3 from "../assets/ImgH/img3.png";
import Img4 from "../assets/ImgH/img4.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        style={{ fontFamily: "Roboto Mono" }}
        className="w-full h-full bg-[#91FFB2]"
      >
        {/* ส่วนบน */}
        <div className="w-8/12 mx-auto flex py-20 justify-between">
          {/* ส่วนที่ l */}
          <div className="flex flex-col">
            <div>
              <h1 className="text-3xl font-bold text-[#333333]">
                My Web Design by
              </h1>
              <h1 className="text-3xl font-bold text-[#333333]">
                React + tailwindCSS
              </h1>
            </div>
            <div className="mt-10">
              <span className="text-[#333333]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                voluptatem doloribus ad iste adipisci. Dolore possimus
                laboriosam molestiae dignissimos dolorem!
              </span>
            </div>
            <div className="mt-15">
              <a
                href="#"
                className="bg-[#333333] text-white text-xl rounded-4xl py-4 px-8 hover:bg-[#282828]"
              >
                Follow Me
              </a>
            </div>
            <div className="mt-25 flex">
              <Link to="/mypagea">
                <img src={Img1} alt="Img1" className="w-82 h-min mr-5" />
              </Link>
              <Link to="/mypageb">
                <img src={Img2} alt="img2" className="w-82 h-min" />
              </Link>
            </div>
          </div>
          {/* ส่วนที่ 2 */}
          <div>
            <Link to="/mypagec">
              <img src={Img3} alt="img3" className="w-59 h-min mr-10 " />
            </Link>
          </div>
          {/* ส่วนที่ 3 */}
          <div>
            <Link to="/mypaged">
              <img src={Img4} alt="img4" className="w-36 h-min ml-10" />
            </Link>
          </div>
        </div>

        {/* ส่วนล่าง */}
        <div className="flex flex-col justify-center items-center text-lg ">
          <span>(รูปและเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น)</span>
          <span>Created by NinniN SAU</span>
          <span>Copyright © 2025 WoW WoW WoW</span>
        </div>
      </div>
    </>
  );
}
