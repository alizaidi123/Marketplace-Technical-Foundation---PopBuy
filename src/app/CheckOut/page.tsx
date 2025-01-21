"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function CheckOut() {
 
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  
  const [orderSummary] = useState({
    subtotal: 250000, 
    total: 250000, 
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Billing Details:", billingDetails);
    
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

     
      <div className="container flex flex-col md:flex-row justify-start mt-6">
       
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-[65%] bg-[#F9F1E7] p-6 md:p-10"
        >
          <h2 className="font-semibold font-poppins text-[32px] mb-6">
            Billing Details
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={billingDetails.name}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={billingDetails.email}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={billingDetails.address}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingDetails.city}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={billingDetails.postalCode}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={billingDetails.phone}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg py-2 px-4 font-poppins w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-6 rounded-xl font-poppins text-[20px] bg-[#b88e2F] text-white py-2 px-6 hover:bg-[#916e26]"
          >
            Place Order
          </button>
        </form>

       
        <div className="bg-[#F9F1E7] w-full md:w-[35%] h-auto p-6 md:p-10 mt-10 md:mt-0">
          <h2 className="font-semibold font-poppins text-[32px] mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between w-full mt-4">
            <p className="font-poppins text-[16px] text-[#000000]">Subtotal</p>
            <p className="font-poppins text-[16px] text-[#9F9F9F]">
              Rs. {orderSummary.subtotal.toLocaleString()}
            </p>
          </div>

          <div className="flex justify-between w-full mt-4">
            <p className="font-poppins text-[16px] text-[#000000]">Total</p>
            <p className="font-poppins text-[20px] text-[#b88e2F]">
              Rs. {orderSummary.total.toLocaleString()}
            </p>
          </div>

          <button className="mt-6 rounded-xl font-poppins text-[20px] bg-[#b88e2F] text-white py-2 px-6 hover:bg-[#916e26] w-full">
            Proceed to Payment
          </button>
        </div>
      </div>
    </>
  );
}
