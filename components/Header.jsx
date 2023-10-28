import logo from "@/public/favicon.ico"
import { Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
const Header = () => {
  return (
    <div className="flex items-center justify-around m-8 text-xl">
        {/* //left div */}
            <div className="m-0">
            <Image
            src={logo}
            width={90} 
            height={90}
            alt="logo"
            />  
            </div>
        {/* //right div */}
            <div className="flex gap-3">
            <Link href="/">Find Home</Link>
            <Link href="/">Old Age Care</Link>
            <Link href="/">Animal Care</Link>
            <Link href="/">Special Schools</Link>
            <Link href="/">Sign In </Link>
            <Link href="/">Sign Up</Link>            
            <Link className="rounded-xl bg-fuchsia-400" href="/">Get App</Link>

            </div>
    </div>
  )
}

export default Header