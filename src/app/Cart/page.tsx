"use client"

import React, { useState } from "react";
import Image from "next/image";
import { RiDeleteBin7Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import FeaturesSection from "../Components/FeatureSec";

export default function Cart() {
 
  const initialProduct = {
    name: "Asgaard sofa",
    price: 250000,
    image: "/asgardsofa.png",
    quantity: 1,
  };

  
  const [product, setProduct] = useState(initialProduct);

  
  const handleQuantityChange = (change:any) => {
    if (product.quantity + change >= 1) {
      setProduct({
        ...product,
        quantity: product.quantity + change,
      });
    }
  };


  const subtotal = product.price * product.quantity;
  const total = subtotal; 

  return (
    <>
      <div className="relative">
        <div
          className="w-full h-[316px] bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/contacts.jpeg')" }}
        ></div>
        <div className="absolute top-[25%] left-[50%] translate-x-[-50%] flex justify-center flex-col items-center">
          <Image
            src="/pic1.png"
            alt="Furniro Logo"
            width={77}
            height={77}
            className="object-contain"
          />
          <h3 className="font-poppins text-[48px] text-[#000000] font-medium">Cart</h3>
          <div className="flex items-center font-poppins">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Cart</h3>
          </div>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row justify-start mt-2">
       
        <div className="flex flex-col w-full md:w-[70%]">
          <div className="flex justify-center items-center gap-6 md:gap-24 w-full md:w-[850px] h-[55px] mt-16 ml-0 md:ml-24 font-poppins text-[16px] bg-[#F9F1E7]">
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
          </div>

          <div className="flex flex-col md:flex-row mt-6">
            <div className="flex items-center justify-center bg-[#F9F1E7] w-[108px] h-[105px] mx-auto md:ml-24">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between font-poppins mt-6 md:mt-24 gap-6 md:gap-[74px] mx-auto md:ml-4">
              <p>{product.name}</p>
              <p className="font-poppins">Rs. {product.price.toLocaleString()}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="border border-solid rounded-lg py-1 px-3 font-poppins"
                >
                  -
                </button>
                <p className="border border-solid rounded-lg py-1 px-3 font-poppins w-8 h-8 text-center">{product.quantity}</p>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="border border-solid rounded-lg py-1 px-3 font-poppins"
                >
                  +
                </button>
              </div>
              <p className="font-poppins">Rs. {subtotal.toLocaleString()}</p>
              <RiDeleteBin7Line size={24} />
            </div>
          </div>
        </div>

      
        <div className="bg-[#F9F1E7] w-full md:w-[393px] h-auto md:h-[390px] p-6 mt-10 md:mt-16 mb-6 flex flex-col items-center">
          <h2 className="font-semibold font-poppins text-[32px]">Cart Totals</h2>

          <div className="flex justify-between w-full mt-10">
            <p className="font-poppins text-[16px] text-[#000000]">Subtotal</p>
            <p className="font-poppins text-[16px] text-[#9F9F9F]">Rs. {subtotal.toLocaleString()}</p>
          </div>

          <div className="flex justify-between w-full mt-10">
            <p className="font-poppins text-[16px] text-[#000000]">Total</p>
            <p className="font-poppins text-[20px] text-[#b88e2F]">Rs. {total.toLocaleString()}</p>
          </div>

          <button className="mt-5 rounded-xl font-poppins text-[20px] border-[#000000] border-[1px] h-[58.95px] p-2 w-[222px]">
           <a href="/CheckOut"> Check Out</a>
          </button>
        </div>
      </div>

      <div className="mb-2">
        <FeaturesSection />
      </div>
    </>
  );
}
