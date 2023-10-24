import React from "react";
import { eduskill, hero, logo } from "@/Data";

const Eduskill = () => {
  return (
    <div className="w-full h-[592px] bg-[#B0E4DE]/40 ">
      <div className="container mx-auto ">
        <div className="lg:flex md:flex justify-between md:space-x-4">
          <div className="section-1 lg:mt-[68px] md:mt-[68px] mt-0 lg:pt-0 md:pt-0 pt-2 lg:mx-0 md:mx-0 mx-[20px]">
            <div className="logo-eduskill flex lg:justify-start md:justify-start justify-start relative">
              <img
                src={eduskill}
                alt="logo_eduskill"
                className="lg:w-48 md:w-52 w-36 lg:h-16 md:h-16 h-12"
              />
            </div>

            <div className="lg:w-[603px] md:w-[603px] w-full lg:mt-3 md:mt-3 mt-2 lg:text-start md:text-start text-start">
              <span className="text-black lg:text-6xl md:text-6xl text-lg font-extrabold font-[''] capitalize tracking-wide">
                Upgrade Skill Pemrogramanmu Bersama{" "}
              </span>
              <span className="text-orange-500 lg:text-6xl md:text-6xl text-lg  font-extrabold font-[''] capitalize tracking-wide">
                Eduskill
              </span>
            </div>
            <div className="lg:mt-5 md:mt-5 mt-2 text-justify">
              <span className="text-black text-base font-normal font-[''] lg:leading-loose md:leading-loose leading-none lg:tracking-tight md:tracking-tight tracking-normal">
                Jadi{" "}
              </span>
              <span className="text-black text-base font-bold font-[''] lg:leading-loose md:leading-loose leading-none lg:tracking-tight md:tracking-tight tracking-normal">
                #SelangkahdiDepan
              </span>
              <span className="text-black text-base font-normal font-[''] lg:leading-loose md:leading-loose leading-none lg:tracking-tight md:tracking-tight tracking-normal">
                {" "}
                kuasai digital skills dengan metode belajar yang fun!
                <br />
                Dapatkan materi sesuai kebutuhan industri dan disiapkan daftar
                kerja
              </span>
            </div>
            <div className="lg:mt-6 md:mt-6 mt-3">
              <div className="lg:w-52 md:w-52 w-40 h-14 px-6 lg:py-3 md:py-3 py-2 bg-orange-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white lg:text-lg md:text-lg text-base font-semibold font-[''] leading-9 tracking-tight">
                  <a href="http://linktr.ee/eduskill">Mulai Sekarang!</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-[125px]">
            <div className="w-[440px] relative">
              <div
                className="relative flex items-end justify-start bg-contain bg-no-repeat rounded-3xl text-left h-[285px]"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.7), transparent), url(${hero})`,
                  backgroundPosition: "left 65px center",
                }}
              >
                <div className="absolute top-0 w-full h-[285px] bg-gradient-to-r from-orange-400 rounded-3xl"></div>
                <div className="left-8 top-[90px] absolute text-white text-xl font-bold font-['Inter'] capitalize leading-7 tracking-tight">
                  Dari gak percaya diri,
                  <br />
                  <span className="font-semibold">
                    hingga mampu <br />
                    menginspirasi
                  </span>
                </div>
                <div className="left-8 top-[220px] absolute">
                  <span className="text-white text-base font-medium font-['Inter'] leading-tight tracking-tight">
                    Saatnya
                  </span>
                  <span className="text-white text-base font-bold font-['Inter'] leading-tight tracking-tight">
                    {" "}
                    #MulaiUpskilling
                    <br />
                  </span>
                  <span className="text-white text-base font-medium font-['Inter'] leading-tight tracking-tight">
                    Bersama Eduskill
                  </span>
                </div>
                <img
                  className="w-48 h-14 left-8 top-[20px] absolute"
                  src={logo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduskill;
