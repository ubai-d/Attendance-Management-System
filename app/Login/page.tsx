"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { SignInschema } from "@/lib/schemas/signin";
import Loader from "@/components/loader";
const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [error, seterror] = useState("Email or Password is Incorrect");
  const [loading, setloading] = useState(false);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: SignInschema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        setloading(true);
        try {
          const response = await fetch("/api/v1/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              
                email: values.email,
                password: values.password,
              
            }),
          });
          const data = await response.json();
          if (data.status === "error") {
            throw new Error(data.message);
          }
          toast.success(data.message, {
            duration: 4000,
          });
          action.resetForm();
          setloading(false);
        } catch (err: any) {
          toast.error(error, {
            duration: 4000,
          });
        }
        setloading(false);
      },
    });

  return (
    <>
      <div className="bg-main h-screen w-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white md:w-[60%] w-[80%] h-[70%] rounded-xl"
        >
          <div className="text-center my-10 mx-2">
            <h1 className="sm:text-3xl text-2xl font-semibold text-sub">
              Welcome To U Attendance System
            </h1>
            <p className="mt-2 sm:text-normal ">
              Register Yourself And Join A Great Community
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col h-20">
            <input
              className="bg-gray-200 sm:px-10 px-5 py-3 rounded-full lg:w-[40rem] md:w-[30rem] sm:w-[25rem] xs:w-[20rem] placeholder:text-black placeholder:text-start text-start"
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Enter Your Email Address Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-red-400 px-3">Please Enter Your Email</p>
            ) : null}
          </div>
          <div className="flex flex-col h-20">
            <input
              className="bg-gray-200 sm:px-10 px-5 py-3 rounded-full lg:w-[40rem] md:w-[30rem] sm:w-[25rem] xs:w-[20rem] placeholder:text-black placeholder:text-start text-start"
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="text-red-400 px-3">{errors.password}</p>
            ) : null}
          </div>

          <div className="flex justify-center items-center mt-7">
            <button
              className="bg-sub px-10 text-white py-3 rounded-xl"
              type="submit"
            >
              {loading ? (
                <Loader width="w-4 text-white" height="h-4" />
              ) : (
                "SUBMIT"
              )}
            </button>
          </div>
          {}
          </div>
        </form>
        
      </div>
    </>
  );
};

export default SignIn;
