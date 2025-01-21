"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function CheckOut() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const form = e.currentTarget;

    if (form.checkValidity()) {
      setIsPopupVisible(true); 
    } else {
      form.reportValidity(); 
    }
  };

  const handleProceedToPayment = () => {
    setIsPopupVisible(false); 
    window.location.href = "/P2P"; 
  };

  const handleCancel = () => {
    setIsPopupVisible(false); 
  };

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
            Checkout
          </h3>
          <div className="flex items-center font-poppins">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Checkout</h3>
          </div>
        </div>
      </div>

      
      <div className="container flex flex-col items-center justify-center mt-10">
        <form
          className="bg-[#F9F1E7] p-6 md:p-10 rounded-lg w-full md:w-[50%]"
          onSubmit={handlePlaceOrder}
          noValidate 
        >
          <h2 className="font-semibold font-poppins text-[32px] mb-6 text-center">
            Shipping Information
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="text"
              placeholder="Shipping Address"
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 rounded-xl font-poppins text-[20px] bg-[#b88e2F] text-white py-2 px-6 hover:bg-[#916e26] w-full"
          >
            Place Order
          </button>
        </form>
      </div>

    
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%] text-center">
            <h2 className="font-poppins text-[24px] font-semibold mb-4">
              Items Reserved!
            </h2>
            <p className="font-poppins text-[16px] text-gray-600 mb-6">
              Your items have been reserved. Please proceed to payment to
              complete your order.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleProceedToPayment}
                className="rounded-lg bg-[#b88e2F] text-white px-6 py-2 hover:bg-[#916e26]"
              >
                Proceed to Payment
              </button>
              <button
                onClick={handleCancel}
                className="rounded-lg border border-gray-400 text-gray-700 px-6 py-2 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
