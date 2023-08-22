import { NewOtp, Otpschema } from "@/lib/schemas/otp";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
import { db } from "@/lib/schemas/drizzle";

import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

// import { UserOtps } from "@/lib/schemas/otp";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

export async function Otp(email: string, username: string) {
  const otp = Math.floor(Math.random() * 999999);
  let sendemail = await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject:
      "Welcome to U Attendance Management System - Your OTP for Verification",
    html: `<h4> Dear ${username},</h4> <p> Welcome to the Attendance Management System! We're thrilled to have you on board. As you embark on this journey with us, we want to ensure a seamless experience in managing your attendance.
        Your account is almost ready to go. Before you can access all the features of the system, we need to verify your email address. Please use the OTP (One-Time Password) provided below to complete the verification process:</p>
        <h4> OTP: ${otp}</h4>
        <p>Please enter this OTP on the verification page to confirm your email address. This is a one-time step to ensure the security of your account.</p>
        <p>Once your email is verified, you'll gain access to your dashboard, where you can mark your attendance, view your attendance history, and much more.</p>
        <p>If you did not sign up for an account with us, please disregard this email. Your account will not be activated without verification.<p/>
        <p>If you encounter any issues during the verification process or have any questions, please don't hesitate to contact our support team at ${process.env.MAIL}.</p>
        <p>Thank you for choosing the Attendance Management System. We look forward to helping you manage your attendance effortlessly.</p>
        Best regards,
        <p>Ubaid-ur-Rehman</p>
       <p>U Attendance Management System</p>
       <p>${process.env.MAIL}</p>`,
  });
  const newOtp: NewOtp = {
    id: uuidv4(),
    email: email,
    otp: otp,
  };
  await db.insert(Otpschema).values(newOtp);
}
