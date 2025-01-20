import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { LuBadgeCheck } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";

const features = [
  {
    icon: <HiOutlineTrophy size={60} />,
    title: "High Quality",
    description: "Crafted from top materials",
  },
  {
    icon: <LuBadgeCheck size={60} />,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: <TbTruckDelivery size={60} />,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: <MdSupportAgent size={60} />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-10 bg-[#faf3ea]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 md:gap-12 bg-[#faf3ea] p-6 rounded-lg ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 w-full md:w-[45%] lg:w-[22%] text-center md:text-left"
            >
             
              <div className="text-4xl text-[#242424]">{feature.icon}</div>

              <div>
                <h3 className="font-semibold text-[22px] md:text-[25px] font-poppins">
                  {feature.title}
                </h3>
                <p className="text-[18px] md:text-[20px] font-poppins text-[#898989]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
