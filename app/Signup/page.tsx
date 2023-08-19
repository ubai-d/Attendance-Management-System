"use client";
import React, { useState } from "react";

import { Field, useFormik } from "formik";
import { signUpSchema } from "@/lib/schemas/form";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    occupation:""
  };
  const [checked, setchecked] = useState(true);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: async (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values.occupation);

        const res = await fetch("/api/v1/signup", {
          method: "POST",
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            password: values.password,
            // occupation : values.
          }),
        });
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  return (
    <>
      <div className="bg-main h-screen w-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-[60%] h-[90%] rounded-xl"
        >
          <div className="text-center my-5">
            <h1 className="text-3xl font-semibold text-sub">
              Welcome To U Attendance System
            </h1>
            <p className="mt-2">Register Yourself And Join A Great Community</p>
          </div>
          <div className="flex flex-col mx-20 h-20">
            <input
              type="name"
              className="bg-gray-200 px-10 py-3 rounded-full w-[41rem] placeholder:text-black placeholder:text-start text-start"
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
          <div className="flex flex-col mx-20 h-20">
            <input
              className="bg-gray-200 px-10 py-3 rounded-full w-[41rem] placeholder:text-black placeholder:text-start text-start "
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
          <div className="flex flex-col mx-20 h-20">
            <input
              className="bg-gray-200 px-10 py-3 rounded-full w-[41rem] placeholder:text-black placeholder:text-start text-start "
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
          <div className="flex flex-col mx-20 h-16">
            <input
              className="bg-gray-200 px-10 py-3 rounded-full w-[41rem] placeholder:text-black placeholder:text-start text-start "
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
          <div className="flex items-center justify-between mx-60 mt-3">
            <label htmlFor="" className="">
              <input
              checked={!checked}
              autoComplete="off"
                type="radio"
                id="teacher"
                name="teacher"
                className="cursor-pointer text-sub"
                onClick={() => setchecked(!checked)}
                value={values.occupation}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span> Teacher </span>
            </label>
            <label className="text-lg text-sub">
              <input
              checked={checked}
              autoComplete="off"
                  type="radio"
                  id="student"
                  name="student"
                  className="w-4 h-4 cursor-pointer text-sub"
                  onClick={() => setchecked(!checked)}
                  value={values.occupation}
                  onChange={handleChange}
                  onBlur={handleBlur}
              />
              <span className="mx-2">Student</span>
             
            </label>
            {/* <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label> */}
          {/* </div> */}


          </div>
          <p className="text-red-400 px-3 text-center">Please Confirm Your Password</p>
          <div className="flex justify-center items-center mt-2">
            <button className="bg-sub px-10 py-3 rounded-xl" type="submit">
              Registration
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
