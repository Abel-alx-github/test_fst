import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {
  registerSchema,
  RegisterData,
} from "../../validators/authValidators"; 
import { createUser, getUserByEmail } from "@/app/lib/fsdb"; 
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    // Validate the body
    const validatedData = registerSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        { errors: validatedData.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, password } = validatedData.data as RegisterData; // Cast to the correct type

    // Check if user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create the user
    const newUser = await createUser({ name, email, passwordHash });

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      },
      { status: 201 }
    ); 
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Registration failed", error: error.message },
      { status: 500 }
    );
  }
}
