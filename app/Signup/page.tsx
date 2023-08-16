// import React from "react";
// function Signin() {
//   return (
//     <div className="flex bg-main h-screen items-center justify-center">
//       <div className="flex flex-col bg-white w-[60%] h-[80%] rounded-xl">
//         <div className="text-center my-10">
//           <h1 className="text-3xl font-semibold text-sub">
//             Welcome To U Attendance System
//           </h1>
//           <p className="mt-2">Register Yourself And Join A Great Community</p>
//         </div>
//         <div className="flex flex-row mx-20 justify-between">
//           <div>
//             <input
//               placeholder="Enter Your First Name"
//               className="bg-gray-200 px-16 py-3 rounded-full w-72 placeholder:text-black placeholder:text-start text-start"
//             />
//           </div>
//           <div>
//             <input
//               placeholder="Enter Your First Name"
//               className="bg-gray-200 px-16 py-3 rounded-full w-72 placeholder:text-black placeholder:text-start text-start"
//             />
//           </div>
//         </div>
//         <div>
//           <div className="mx-20 my-5">
//             <input
//               placeholder="Enter Your Email Address"
//               className="bg-gray-200 px-16 py-3 rounded-full w-[41rem] placeholder:text-black placeholder:text-start text-start"
//             />
//           </div>
//           <div className="mx-20 my-5">
//             <input
//               placeholder="Enter Your Password"
//               className="bg-gray-200 px-16 py-3 rounded-full w-[41rem] placeholder:text-black placeholder:text-start text-start"
//             />
//           </div>
//           <div className="mx-20 my-5">
//             <input
//               placeholder="Confirm Yoour Password"
//               className="bg-gray-200 px-16 py-3 rounded-full w-[41rem] placeholder:text-black placeholder:text-start text-start"
//             />
//           </div>
//           <div className="flex justify-between mx-40">
//             <div className="flex gap-3">
//             <input type="radio" />
//             <p>teacher</p>
//             </div>
//            <div className="flex gap-3">
//            <input type="radio" />
//            <p>Student</p>
//            </div>

//           </div>
//         </div>
//         <div className="mx-auto">
//           <button className="bg-sub px-10 py-3 rounded-xl">Register</button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Signin;

import React from "react";

function Signup() {
  return (
    <>
    <div className="flex justify-center items-center bg-main h-screen">
      <form className="bg-white h-[70%] w-[50%] rounded-2xl">
        <div className="flex flex-row">
          <div className="flex flex-col">
          <label htmlFor="First Name" className="input-label">
            Name*
          </label>
          <input
            type="name"
            autoComplete="off"
            name="First Name"
            id="First Name"
            placeholder="First Name"
          />
          </div>
          <div className="flex flex-col">
          <label htmlFor="Last Name Name" className="input-label">
            Name*
          </label>
          <input
            type="name"
            autoComplete="off"
            name="Last Name Name"
            id="Last Name Name"
            placeholder="Last Name Name"
          />
          </div>
        </div>
        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Email*
          </label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="input-block">
          <label htmlFor="password" className="input-label">
            Password*
          </label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="input-block">
          <label htmlFor="confirm_password" className="input-label">
            Confirm Password*
          </label>
          <input
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
          />
        </div>
      </form>
      </div>
    </>
  );
}

export default Signup;
