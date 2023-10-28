import Heroimg from "@/public/hero.png"
import Image from "next/image"
import {Button} from "@nextui-org/react";

const Hero = () => {
  return (
    <div className="flex items-center">
      {/* //left div */}
      <div className="w-[50%] h-80 p-4 m-auto ml-20 mt-20">
        <h1 className="text-6xl font-bold capitalize">Live Like Your Own home</h1>
        <p className="mt-5 text-3xl text-[#7D7987]">Embracing the Golden Years: Where Every Chapter of Life Finds Comfort and Care.</p>
        <button className="w-56 h-16 text-white bg-[#458FF6] rounded-[55px] mt-6 text-2xl font-bold">Get App</button>
        <Button color="primary">Button</Button>
      </div>
      {/* //right div */}
      <div>
        <Image
        className="h-100% p-4 w-100%"
        src={Heroimg}
        width={900}
        height={900}
        alt="Hero section image"
        />
      </div>
    </div>
  )
}

export default Hero