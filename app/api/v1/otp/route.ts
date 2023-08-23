import { cookies } from "next/headers";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { decode } from "jsonwebtoken";
import { eq } from "drizzle-orm";
import { db } from "@/lib/schemas/drizzle";
import { Otpschema } from "@/lib/schemas/otp";
import { Users } from "@/lib/schemas/user";
export async function POST(response: NextResponse, request: NextApiRequest) {
  try {
    const data = await response.json();
    if (!data.otp) {
      throw new Error("Otp is required");
    }
    const emailCookies: string | undefined = cookies().get("useremail")?.value;
    if (emailCookies !== undefined) {
      const decodedvalue: any = decode(emailCookies);
      const emailverify = await db
        .select()
        .from(Otpschema)
        .where(eq(Otpschema.email, decodedvalue.email));
      if (!emailverify.length) {
        throw new Error("Email is In valid");
      }
      const Otpverify = await db
        .select()
        .from(Otpschema)
        .where(eq(Otpschema.otp, data.otp));
      if (!Otpverify.length) {
        throw new Error("Otp is invalid");
      }
    }
    await db
      .update(Users)
      .set({ verified: true })
      .where(eq(Users.email, data.email));
    return NextResponse.json(
      { message: "User Verified successfully", status: "success" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message, status: "error" });
  }
}
