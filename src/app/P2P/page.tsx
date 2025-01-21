"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Payment() {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Payment Details:", paymentDetails);
    
    window.location.href = "/OrderC";
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
            Payment
          </h3>
          <div className="flex items-center font-poppins">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Payment</h3>
          </div>
        </div>
      </div>

     
      <div className="container flex flex-col items-center justify-center mt-10">
        <form
          onSubmit={handlePayment}
          className="bg-[#F9F1E7] p-6 md:p-10 rounded-lg w-full md:w-[50%]"
        >
          <h2 className="font-semibold font-poppins text-[32px] mb-6 text-center">
            Payment Details
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="text"
              name="cardHolder"
              placeholder="Card Holder Name"
              value={paymentDetails.cardHolder}
              onChange={handleInputChange}
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 rounded-xl font-poppins text-[20px] bg-[#b88e2F] text-white py-2 px-6 hover:bg-[#916e26] w-full"
          >
           Pay Now
          </button>
        </form>
      </div>
    </>
  );
}
