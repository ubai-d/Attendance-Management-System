import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "@/lib/schemas/drizzle";
import { NewUser, Users } from "@/lib/schemas/user";
import { NextRequest, NextResponse } from "next/server";

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
    const encryppass = await bcrypt.hash(data.password, 10);
    const Matchedusers = await db
      .select()
      .from(Users)
      .where(eq(Users.email, data.email));
    console.log(Matchedusers);
      
    if(Matchedusers.length){
      throw new Error("User Already Exist")
    }

    const newUser: NewUser = {
        name: data.name,
        email: data.email,
        password: encryppass,
        id: uuidv4(),
        created_at: new Date()
    }

    await db.insert(Users).values(newUser)

    return NextResponse.json({ message: 'User registered successfully', status: "success" }, { status: 200 })
}catch (err: any) {
    return NextResponse.json(
      { message: err.message, status: "error" },
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "hello" });
}
