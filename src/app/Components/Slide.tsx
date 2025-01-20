import Image from "next/image";

export default function Slide() {
  return (
    <div className="slideSection bg-[#FCF8F3] px-4 sm:px-6 lg:px-8">
      <div className="slideText pt-9 text-center md:text-left">
        <h4 className="font-extrabold text-[1.5rem] sm:text-[2rem]">
          50+ Beautiful rooms inspiration
        </h4>
        <p className="text-[0.875rem] sm:text-[1rem] mt-2">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </p>
        <button className="bg-[#B88E2F] text-white py-2 px-4 rounded hover:bg-[#a07c27] transition mt-4">
          Explore More
        </button>
      </div>
      <div className="slideImages flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <div className="w-full md:w-auto">
          <Image
            src="/wallDec.png"
            width={280}
            height={200}
            alt="Beautiful Room Inspiration"
            className="mx-auto md:mx-0"
          />
        </div>
        <div className="w-full md:w-auto mt-3 md:mt-0">
          <Image
            src="/readinArea.png"
            width={300}
            height={200}
            alt="Additional Room Inspiration"
            className="mx-auto md:mx-0"
          />
        </div>
      </div>
    </div>
  );
}
