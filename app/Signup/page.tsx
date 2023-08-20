"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { signUpSchema } from "@/lib/schemas/form";
import Loader from "@/components/loader";
const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "",
  };
  const [checked, setchecked] = useState(true);
  const [role, setrole] = useState("Student");
  const [error, seterror] = useState("User With This Email Already exist");
  const [loading , setloading] = useState(false)

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        setloading(true)
        try { 
          const response = await fetch("/api/v1/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              password: values.password,
              role: role,
            }),
          });
          const data = await response.json();
          if (data.status === "error") {
            throw new Error(data.message);
          }
          action.resetForm();
          setloading(false)
        } catch (err: any) {
        toast.error(error,{
        duration: 4000,
        })
      }
      setloading(false)
      },
    });

  return (
    <>
      <div className="bg-main h-screen w-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white md:w-[60%] w-[80%] h-[90%] rounded-xl"
        >
          <div className="text-center my-5">
            <h1 className="text-3xl font-semibold text-sub">
              Welcome To U Attendance System
            </h1>
            <p className="mt-2">Register Yourself And Join A Great Community</p>
          </div>
          <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col h-20">
            <input
              type="name"
              className="bg-gray-200 px-10 py-3 rounded-full [@media(min-width:1200px)]:w-[41rem] [@media(min-width:850px)]:w-[30rem] [@media(min-width:]:w-[30rem] placeholder:text-black placeholder:text-start text-start"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name ? (
              <p className="text-red-400 px-3">{errors.name}</p>
            ) : null}
          </div>
          <div className="flex flex-col h-20">
            <input
              className="bg-gray-200 px-10 py-3 rounded-full [@media(max-width:1200px)]:w-[41rem] [@media(min-width:850px)]:w-[30rem] [@media(min-width:]:w-[30rem] placeholder:text-black placeholder:text-start text-start"
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
              className="bg-gray-200 px-10 py-3 rounded-full [@media(min-width:1200px)]:w-[41rem] [@media(min-width:850px)]:w-[30rem] [@media(min-width:]:w-[30rem] placeholder:text-black placeholder:text-start text-start"
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
          <div className="flex flex-col h-16">
            <input
              className="bg-gray-200 px-10 py-3 rounded-full [@media(min-width:1200px)]:w-[41rem] [@media(min-width:850px)]:w-[30rem] [@media(min-width:]:w-[30rem] placeholder:text-black placeholder:text-start text-start"
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="text-red-400 px-3">Please Confirm Your Password</p>
            ) : null}
          </div>
          <div className="flex items-center justify-between gap-40 mt-3">
            <label htmlFor="" className="text-lg">
              <input
                autoComplete="off"
                type="radio"
                id="teacher"
                name="teacher"
                className="cursor-pointer text-sub"
                onClick={() => {
                  setchecked(!checked);
                  setrole("Teacher");
                }}
                value={values.role}
                checked={!checked}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <span className="text-sub mx-2"> Teacher </span>
            </label>
            <label className="text-lg text-sub">
              <input
                autoComplete="off"
                type="radio"
                id="student"
                name="Student"
                className="cursor-pointer text-sub"
                onClick={() => {
                  setchecked(!checked);
                  setrole("Student");
                }}
                value={values.role}
                checked={checked}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <span className="mx-2">Student</span>
            </label>
          </div>
          </div>
          <div className="flex justify-center items-center mt-7">
            <button className="bg-sub px-10 text-white py-3 rounded-xl" type="submit">
            {loading ? <Loader width="w-4 text-white" height="h-4" /> : "SUBMIT"}
            </button>
          </div>
          {}
        </form>
      </div>
    </>
  );
};

export default SignUp;
