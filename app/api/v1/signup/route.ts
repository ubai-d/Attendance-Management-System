import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "@/lib/schemas/drizzle";
import { NewUser, Users } from "@/lib/schemas/user";
import { NextRequest, NextResponse } from "next/server";
import { Otp } from "@/otp/otp";
import jwt from "jsonwebtoken";
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    if (!data.email) {
      throw new Error("Email is required");
    }
    if (!data.password) {
      throw new Error("Password is required");
    }
    if (!data.name) {
      throw new Error("Full Name is required");
    }
    if (!data.role) {
      throw new Error("Role is required");
    }
    const encryppass = await bcrypt.hash(data.password, 10);
    const Matchedusers = await db
      .select()
      .from(Users)
      .where(eq(Users.email, data.email));
    if (Matchedusers.length) {
      throw new Error("User with this Email Already Exist");
    }

    const newUser: NewUser = {
      name: data.name,
      email: data.email,
      password: encryppass,
      id: uuidv4(),
      created_at: new Date(),
      role: data.role,
      verified:"Not verified",
    };
    await Otp(data.email, data.name);
    await db.insert(Users).values(newUser);
    const response = NextResponse.json(
      { message: "User registered successfully", status: "success" },
      { status: 200 }
    );
    const useremail = jwt.sign(
      {
        email: data.email,
        name : data.name
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );
    response.cookies.set("useremail", useremail,{
      httpOnly:true,
    });
    return response;
  } catch (err: any) {
    console.log((err as { messsage: string }).messsage);
    return NextResponse.json({ message: err.message, status: "error" });
  }
}
