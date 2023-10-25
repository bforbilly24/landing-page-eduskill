import React, { useEffect } from "react";
import { eduskill_left, consultant, prev, next } from "@/Data";
import AOS from "aos";
import "aos/dist/aos.css";

const Benefit = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="w-full section bg-teal-400 lg:my-[50px] md:my-[50px] my-5 lg:mx-auto md:mx-auto mx-0 relative"
    >
      <div className="w-full relative py-[40px] lg:pr-[67px] md:pr-[67px] pr-0 overflow-hidden">
        <div className="lg:visible md:visible invisible bg-teal-400 h-[25px] w-full rotate-[105deg] absolute z-20 left-[45%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="bg-orange-400 w-[100%] md:ml-[42%] xl:ml-[50%] absolute left-0 lg:top-0 md:top-0 bottom-0 lg:h-full md:full h-1/2 lg:-skew-x-[15deg] md:-skew-x-[15deg] -skew-x-0 z-10"></div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className=" text-white lg:text-[27px] md:text-[27px] lg:mt-0 md:mt-0 mt-44 text-base lg:flex md:flex lg:justify-end md:justify-end lg:text-start md:text-start text-center font-extrabold lg:mr-10 md:mr-10 mr-0 font-['Inter'] capitalize leading-loose tracking-wide relative z-20"
        >
          Tenang, ada Eduskill Consultant!
        </div>

        {consultant.map((item) => (
          <div
            key={item.id}
            data-aos="fade-left"
            data-aos-duration="2000"
            className="flex lg:justify-end md:justify-end justify-between lg:px-0 md:px-0 px-16 space-x-3 relative z-20"
          >
            <div>
              {item.textLabel && (
                <div className="lg:text-right md:text-right text-center text-white lg:text-lg md:text-lg text-sm font-normal font-['Inter'] capitalize leading-loose tracking-tight my-auto">
                  {item.textLabel}
                </div>
              )}
            </div>
            <div className="my-auto">
              {item.additionalElements && (
                <div>
                  {item.additionalElements.map((element) => (
                    <div key={element.id}>
                      <img
                        src={element.icon}
                        alt="Check Icon"
                        className="lg:w-7 md:w-7 w-5"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-teal-400 absolute w-full top-0">
        <div className="lg:py-[40px] md:py-[40px] lg:pl-[100px] md:pl-[100px]">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="pt-2.5 pb-2.5 left-0 top-0 absolute bg-white rounded-tr-full rounded-br-full flex-col justify-start items-start gap-2.5 inline-flex"
          >
            <img className="w-20 h-6" src={eduskill_left} />
          </div>

          <div className="flex-col lg:mt-0 md:mt-0 mt-10 justify-start items-start gap-1 lg:inline-flex md:inline-flex">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="lg:w-96 md:w-96 w-44 h-36 flex-col lg:mx-0 md:mx-0 mx-auto justify-start items-start gap-1 lg:inline-flex md:inline-flex"
            >
              <div className="lg:text-start text-center py-0.5 bg-orange-400 lg:mx-0 md:mx-0 mx-auto justify-center items-center gap-2.5 lg:inline-flex md:inline-flex">
                <div className="text-white lg:text-lg md:text-lg sm:text-center text-sm font-extrabold font-['Poppins'] capitalize leading-9 tracking-tight">
                  Mau ikut bootcamp
                </div>
              </div>
              <div className="lg:w-96 md:w-96 w-full h-28 lg:text-start md:text-start sm:text-center text-center text-white lg:text-4xl md:text-4xl text-base font-extrabold font-['Poppins'] capitalize lg:leading-10 md:leading-10 leading-7 tracking-wide">
                tapi takut salah <br />
                pilih course?
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[1324px] md:w-[1080px] w-full lg:h-16 md:h-16 h-[215px] absolute flex justify-between items-center z-20 left-1/2 transform -translate-x-1/2 top-1/2">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="w-16 h-16 absolute left-0"
          >
            <button>
              <img
                src={prev}
                alt=""
                className="lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </button>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="w-16 h-16 absolute right-0"
          >
            <button>
              <img
                src={next}
                alt=""
                className="lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
