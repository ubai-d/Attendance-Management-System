"use client"
import React, { useEffect, useState } from "react";

const OTPBox = (email:string) => {

    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element:any, index:any) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //F
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
            <div className="row">
                <div className="col text-center">
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition spin-button-none"
                                type="text"
                                name="otp"
                                maxLength={1}
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
                    <p>
                        <button
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                     
                    </p>
                </div>
            </div>
        </>
    );
};

export default OTPBox;