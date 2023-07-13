 import User from "@/app/model/userModel";
import connectDB from "@/config/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
 
connectDB(); // Connect to the database

export const POST = async (request) => {
  try {
    const { email, password, name, address, city, state, pincode} = await request.json();
    if (!email || !password || !name || !address || !city || !state || !pincode) {
      return new NextResponse(
        JSON.stringify({ message: "Please fill all input", status: 400 })
      );
    }
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return new NextResponse(JSON.stringify({ message: "Email Already Exist", status: 404 }));
    }else{
      const hashpassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password:hashpassword, name, address, city, state, pincode, role: "user" });
        await user.save();
       return new NextResponse(JSON.stringify({message: "User Registered Successfully", status: 200}));
    }
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", status: 500 })
    );
  }
};
