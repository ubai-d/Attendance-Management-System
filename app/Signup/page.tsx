"use client"
import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
function Signup() {
    const initialValues = {
      FirstName: "",
      LastName: "",
      email: "",
      password: "",
      confirm_password: "",
    };
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });
    console.log(errors);
  return (
    <>
      <div className="flex justify-center items-center bg-main h-screen">
        <form className="bg-white w-[60%] h-[80%] rounded-2xl">
          <div className="text-center my-10">
            <h1 className="text-3xl font-semibold text-sub">
              Welcome To U Attendance System
            </h1>
            <p className="mt-2">Register Yourself And Join A Great Community</p>
          </div>
          <div className="flex flex-row mx-16 gap-20 my-5">
            <div className="flex flex-col">
              <input
                className="bg-gray-200 px-10 py-3 rounded-full w-72 placeholder:text-black placeholder:text-start text-start "
                type="name"
                autoComplete="off"
                name="First Name"
                id="First Name"
                placeholder="First Name"
                value={values.FirstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <input
              className="bg-gray-200 px-10 py-3 rounded-full w-72 placeholder:text-black placeholder:text-start text-start "
              type="name"
              autoComplete="off"
              name="Last Name"
              id="Last Name"
              placeholder="Last Name"
              value={values.LastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mx-16 my-5">
            <input
              className="bg-gray-200 px-10 py-3 rounded-full w-[41rem] placeholder:text-black placeholder:text-start text-start "
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mx-16 my-5">
            <input
              className="bg-gray-200 px-10 py-3 rounded-full w-[41rem] placeholder:text-black placeholder:text-start text-start "
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mx-16 my-5">
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
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
          </div>
          <div className="flex items-center justify-center">
            {" "}
            <button className="bg-sub px-10 py-3 rounded-xl" type="submit">
              Register
            </button>{" "}
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
