import { db } from "@/lib/schemas/drizzle";
import { Users } from "@/lib/schemas/user";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
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
    const userdata = await db
      .select()
      .from(Users)
      .where(eq(Users.email, data.email));
    if (!userdata.length) {
      throw new Error("User Not Exist With this email");
    }
    const verifiied = await bcrypt.compare(data.password, userdata[0].password);

    if (!verifiied) {
      throw new Error("Password is Incorrect");
    }
    const token = jwt.sign(
      {
        id: userdata[0].id,
        email: userdata[0].email,
        name: userdata[0].name,
        role:userdata[0].role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );
    const response = NextResponse.json({
      success: true,
      message: "Login successfully",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message, status: "error" },
      { status: err.statusCode ? err.statusCode : 500 }
    );
  }
}
