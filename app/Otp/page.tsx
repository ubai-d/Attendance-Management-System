"use client"
import Cookies from 'js-cookie';
import React, { useState } from 'react'

function Otp() {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const email = Cookies.get("useremail");
    console.log(email);
    
  return (
    <div className="h-screen flex justify-center items-center space-x-2">
    {otp.map((_, index) => {
      return (
        <div key={index}>
          <input
            type=""
            className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition spin-button-none"
            maxLength={1}
          />
      </div>
      );
    })}
  </div>
  )
}

export default Otp