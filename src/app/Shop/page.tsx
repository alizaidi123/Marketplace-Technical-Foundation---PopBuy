import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import FeaturesSection from "../Components/FeatureSec";

export default function Shop() {
  interface Card {
    name: string;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      image: "/image-1.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      image: "/image-2.png",
      description: "Stylish cafe chair.",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      image: "/image-3.png",
      description: "Luxury big sofa.",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      image: "/image-4.png",
      description: "Outdoor bar table & stool.",
    },
    {
      name: "Grifo",
      price: "Rp 1.500.000",
      image: "/image-5.png",
      description: "Night lamp.",
    },
    {
      name: "Muggo",
      price: "Rp 150.000",
      image: "/image-9.jpeg",
      description: "Small mug.",
    },
    {
      name: "Pingky",
      price: "Rp 7.000.000",
      image: "/image-7.png",
      description: "Cute bed set",
    },
    {
      name: "Potty",
      price: "Rp 500.000",
      image: "/image-8.jpeg",
      description: "Minimalist flower pot.",
    },
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      image: "/image-1.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      image: "/image-2.png",
      description: "Stylish cafe chair.",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      image: "/image-3.png",
      description: "Luxury big sofa.",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      image: "/image-4.png",
      description: "Outdoor bar table & stool.",
    },
    {
      name: "Grifo",
      price: "Rp 1.500.000",
      image: "/image-5.png",
      description: "Night lamp.",
    },
    {
      name: "Muggo",
      price: "Rp 150.000",
      image: "/image-9.jpeg",
      description: "Small mug.",
    },
    {
      name: "Pingky",
      price: "Rp 7.000.000",
      image: "/image-7.png",
      description: "Cute bed set",
    },
    {
      name: "Potty",
      price: "Rp 500.000",
      image: "/image-8.jpeg",
      description: "Minimalist flower pot.",
    },

    {
      name: "Grifo",
      price: "Rp 1.500.000",
      image: "/image-5.png",
      description: "Night lamp.",
    },
    {
      name: "Muggo",
      price: "Rp 150.000",
      image: "/image-9.jpeg",
      description: "Small mug.",
    },
    {
      name: "Pingky",
      price: "Rp 7.000.000",
      image: "/image-7.png",
      description: "Cute bed set",
    },
    {
      name: "Potty",
      price: "Rp 500.000",
      image: "/image-8.jpeg",
      description: "Minimalist flower pot.",
    },
  ];

  return (
    <>
      <div className="relative">
        <div
          className="w-full h-[200px] sm:h-[316px] bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/contacts.jpeg')" }}
        ></div>
        <div className="absolute top-[15%] sm:top-[25%] left-[50%] transform -translate-x-1/2 flex flex-col items-center text-center">
          <Image
            src="/pic1.png"
            alt="Furniro Logo"
            width={60}
            height={60}
            className="object-contain sm:w-[77px] sm:h-[77px]"
          />
          <h3 className="text-2xl sm:text-4xl font-semibold font-poppins">
            Shop
          </h3>
          <div className="flex items-center text-sm sm:text-base font-poppins">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
      </div>

      <div
        className="w-full h-[40px] sm:h-[60px] bg-cover bg-center"
        style={{ backgroundImage: "url('/shop-upper.jpg')" }}
      ></div>
      <div
        className="Container items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 my-4"
        style={{ rowGap: "40px" }}
      >
        {data.map((card, index) => (
          <div
            className="card border shadow-lg rounded-lg overflow-hidden"
            key={index}
          >
            <Image
              src={card.image}
              alt={card.name}
              width={300}
              height={300}
              className="object-cover w-full h-48 sm:h-60"
            />
            <div className="card-body p-4">
              <h5 className="card-title font-bold font-poppins text-lg sm:text-xl">
                {card.name}
              </h5>
              <p className="card-text text-gray-600 font-poppins text-sm sm:text-base">
                {card.description}
              </p>
              <h5 className="card-title font-bold text-lg sm:text-xl mt-2 font-poppins">
                {card.price}
              </h5>
            </div>
          </div>
        ))}
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
      <div className="mb-2">
        <FeaturesSection />
      </div>
    </>
  );
}
