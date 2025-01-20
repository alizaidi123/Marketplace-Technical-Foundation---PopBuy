import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled } from "react-icons/tb";
import { TbClockHour4Filled } from "react-icons/tb";
import FeaturesSection from "../Components/FeatureSec";

export default function () {
  return (
    <>
      <div className="relative">
        <div
          className="w-full h-[316px] bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/contacts.jpeg')" }}
        ></div>
        <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 flex justify-center flex-col items-center">
          <Image
            src="/pic1.png"
            alt="Furniro Logo"
            width={77}
            height={77}
            className="object-contain"
          />
          <h3 className="font-[500] font-poppins text-[36px] sm:text-[48px]">
            Contact
          </h3>
          <div className="flex items-center font-poppins">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Contact</h3>
          </div>
        </div>
      </div>

      <div className="text-center w-[90%] mx-auto mt-8 md:mt-16 font-poppins">
        <h2 className="font-semibold text-[1.5rem] sm:text-[2rem]">
          Get In Touch With Us
        </h2>
        <p className="font-poppins text-[14px] sm:text-[16px] text-[#9f9f9f]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br className="hidden sm:block" /> An Email. Our Staff Always Be There
          To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly leading-8 mt-10 md:mt-20 gap-8">
        <div className="w-full md:w-[393px]">
          <div className="flex flex-col">
            <FaLocationDot size={24} />
            <div className="ml-4 md:ml-8">
              <h2 className="font-semibold text-[18px] md:text-[20px] font-poppins">
                Address
              </h2>
              <p className="font-medium text-[#000000] text-[14px] font-poppins">
                236 5th SE Avenue, New
              </p>
              <p className="font-medium text-[#000000] text-[14px] font-poppins">
                York NY10000, United
              </p>
              <p className="font-medium text-[#000000] text-[14px] font-poppins">
                States
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[393px]">
          <div className="flex flex-col">
            <TbPhoneFilled size={24} />
            <div className="ml-4 md:ml-8">
              <h2 className="font-semibold text-[18px] md:text-[20px] font-poppins">
                Phone
              </h2>
              <p className="font-medium text-[#000000] text-[14px] font-poppins">
                Mobile: +(84) 546-6789
              </p>
              <p className="font-medium text-[#000000] text-[14px] font-poppins">
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[393px]">
          <div className="flex flex-col">
            <TbClockHour4Filled size={24} />
            <div className="ml-4 md:ml-8">
              <h2 className="font-semibold text-[18px] md:text-[20px] font-poppins">
                Working Time
              </h2>
              <p className="font-medium text-[#000000] text-[14px] font-poppins">
                Monday-Friday: 9:00 - 22:00
              </p>
              <p className="font-medium text-[#000000] text-[14px] font-poppins">
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-20 px-4">
        <form className="flex flex-col gap-4 md:gap-2 items-center justify-center">
          <label
            htmlFor=""
            className="font-medium text-[#000000] text-[14px] font-poppins"
          >
            Your Name
          </label>
          <input
            type="text"
            className="border-gray-200 border-2 py-2 px-4 rounded-md w-full md:w-[528.75px] h-[75px]"
            placeholder="Abc"
          />
          <label
            htmlFor=""
            className="font-medium text-[#000000] text-[14px] font-poppins"
          >
            Email
          </label>
          <input
            type="text"
            className="border-gray-200 border-2 py-2 px-4 rounded-md w-full md:w-[528.75px] h-[75px]"
            placeholder="Abc@def.com"
          />
          <label
            htmlFor=""
            className="font-medium text-[#000000] text-[14px] font-poppins"
          >
            Subject
          </label>
          <input
            type="text"
            className="border-gray-200 border-2 py-2 px-4 rounded-md w-full md:w-[528.75px] h-[75px]"
            placeholder="This is an optional"
          />
          <label
            htmlFor=""
            className="font-medium text-[#000000] text-[14px] font-poppins"
          >
            Message
          </label>
          <textarea
            className="border-gray-200 border-2 px-4 py-2 rounded-md w-full md:w-[528.75px] h-[166px] text-[#9f9f9f]"
            placeholder="Hi! I’d like to ask about"
          ></textarea>
          <button className="self-center bg-[#B88E2F] text-white mt-9 px-6 py-3 rounded-md font-poppins text-[16px] ">
            Submit
          </button>
        </form>
      </div>

      <div
        className="mt-14 mb-2"
      >
        <FeaturesSection/>
      </div>

    </>
  );
}
