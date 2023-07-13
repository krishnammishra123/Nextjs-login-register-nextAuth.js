 "use client"
import { useSession } from "next-auth/react"

 
const UserHome = () => {
  const {data}=useSession()
 
  return (
    <div className="items-center flex justify-center mt-5 font-serif font-bold text-2xl">
      Welcome To The UserHome &nbsp; &nbsp; 
      <span className="font-serif text-red-800 text-xl">
        {data?.user?.email} 
      </span>
    </div>
  );
}

export default UserHome