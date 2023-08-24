import { db } from "@/lib/schemas/drizzle";
import { Otpschema } from "@/lib/schemas/otp";
import { Otp } from "@/otp/otp";
import { eq } from "drizzle-orm";
import { decode } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(response:NextResponse){
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
         await Otp(decodedvalue.email,decodedvalue.name)
         return NextResponse.json({
            message : "Otp Send Successfully",
            status : "success"
         })
    }}catch(err:any){
        return NextResponse.json({
            message : err,
            status : "error"
         })
    }
}