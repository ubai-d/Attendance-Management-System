import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export async function POST(response: NextResponse) {
  try {
   
    const data = await response.json();
    if (!data.otp) {
      throw new Error("Otp is required");
    }
  } catch {}
}
