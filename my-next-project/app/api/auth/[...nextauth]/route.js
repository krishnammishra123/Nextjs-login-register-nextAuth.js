import User from "@/app/model/userModel";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDB from "@/config/db";

 const handler = NextAuth({
   session: {
     strategy: "jwt",
   },
   providers: [
     CredentialsProvider({
       async authorize(credentials) {
         connectDB();
         const { email, password } = credentials;

         const user = await User.findOne({ email });
         if (!user) {
           throw new Error("Invalid Email or Password");
         }
         const matchPassowrd = await bcrypt.compare(password,user.password);

         if (!matchPassowrd) {
           throw new Error("Invalid Email or Password");
         }
         return user;
       },
     }),
   ],
   pages: {
     signIn:'/login'
   },
   secret: process.env.NEXTAUTH_SECRET,
 });
export { handler as GET, handler as POST };