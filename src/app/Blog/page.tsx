import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import FeaturesSection from "../Components/FeatureSec";

export default function Blog() {
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
            Blog
          </h3>
          <div className="flex items-center font-poppins">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Blog</h3>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-10 flex flex-col md:mx-5 md:flex-row justify-center gap-6 md:gap-12">
        <div className="container px-6 grid gap-6 md:grid-cols-1 w-full">
          <div className="bg-[#F9F1E7] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/blog1.jpeg"
              alt="Blog Post 1"
              width={400}
              height={200}
              className="w-full object-cover h-[200px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">
                Going all-in with millennial design
              </h3>
              <p className="text-sm text-gray-700 font-poppins mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a
                href="/blog/how-to-choose-furniture"
                className="text-[#b88e2F] font-poppins mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-[#F9F1E7] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/blog2.jpeg"
              alt="Blog Post 2"
              width={400}
              height={200}
              className="w-full object-cover h-[200px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">
                Exploring new ways of decorating
              </h3>
              <p className="text-sm text-gray-700 font-poppins mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a
                href="/blog/minimalist-design-benefits"
                className="text-[#b88e2F] font-poppins mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-[#F9F1E7] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/blog3.jpeg"
              alt="Blog Post 3"
              width={400}
              height={200}
              className="w-full object-cover h-[200px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">
                Handmade pieces that took time to make
              </h3>
              <p className="text-sm text-gray-700 font-poppins mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a
                href="/blog/interior-trends-2024"
                className="text-[#b88e2F] font-poppins mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[393px] ml-1 mr-1 mt-10">
          <div className="flex flex-col font-poppins">
            <div className="box box-border flex flex-row px-4 py-1 rounded-lg border-2 border-solid border-[#9f9f9f] items-center justify-between">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 px-4 text-sm"
              />
              <FiSearch size={24} />
            </div>
            <div className="flex flex-col font-poppins mt-8 pl-8 gap-8 px-4">
              <h2 className="text-xl font-bold text-[#000000]">Categories</h2>
              <div className="flex flex-col-2 gap-4 sm:gap-8 justify-between">
                <ul className="text-[16px] text-[#9f9f9f] space-y-5">
                  <li>Crafts</li>
                  <li>Design</li>
                  <li>Handmade</li>
                  <li>Interior</li>
                  <li>Wood</li>
                </ul>
                <ul className="text-[16px] text-[#9f9f9f] space-y-5">
                  <li>2</li>
                  <li>8</li>
                  <li>7</li>
                  <li>1</li>
                  <li>6</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex items-center flex-row justify-center mt-8 mb-12 space-x-4 sm:space-x-8">
        <button className="productBtn font-poppins text-lg text-white bg-[#B88E2F] border-2 border-[#B88E2F] rounded-xl w-[60px] h-[60px] sm:w-16 sm:h-16">
          1
        </button>
        <button className="productBtn font-poppins text-lg text-[#000000] bg-[#F9F1E7] border-2 border-[#B88E2F] rounded-xl w-[60px] h-[60px] sm:h-16">
          2
        </button>
        <button className="productBtn font-poppins text-lg text-[#000000] bg-[#F9F1E7] border-2 border-[#B88E2F] rounded-xl w-[60px] h-[60px] sm:h-16">
          3
        </button>
        <button className="productBtn font-poppins text-lg text-[#000000] bg-[#F9F1E7] border-2 border-[#B88E2F] rounded-xl w-[98px] h-[60px] px-4 py-2 sm:px-6 sm:py-3">
          Next
        </button>
      </div>

      <div className="mt-10 mb-2">
        <FeaturesSection />
      </div>
    </>
  );
}
