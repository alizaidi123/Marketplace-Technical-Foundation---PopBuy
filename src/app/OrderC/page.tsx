"use client";

import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function OrderConfirmation() {
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
          <h3 className="font-poppins text-[48px] text-[#000000] font-medium">
            Order Confirmed
          </h3>
          <div className="flex items-center font-poppins">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Order Confirmation</h3>
          </div>
        </div>
      </div>

     
      <div className="container flex flex-col items-center justify-center mt-10">
        <div className="bg-[#F9F1E7] p-6 md:p-10 rounded-lg w-full md:w-[50%] text-center">
          <Image
            src="/success.png"
            alt="Success"
            width={100}
            height={100}
            className="mx-auto mb-6"
          />
          <h2 className="font-semibold font-poppins text-[32px] mb-4">
            Thank You!
          </h2>
          <p className="font-poppins text-[16px] text-gray-600 mb-4">
            Your payment has been successfully processed, and your order has
            been placed. A confirmation email has been sent to your registered
            email address.
          </p>
          <p className="font-poppins text-[16px] text-gray-600">
            If you have any questions, feel free to contact our support team.
          </p>

          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 rounded-xl font-poppins text-[20px] bg-[#b88e2F] text-white py-2 px-6 hover:bg-[#916e26]"
          >
           <a href="/">Back to Home</a>
          </button>
        </div>
      </div>
    </>
  );
}
