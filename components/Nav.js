import Image from "next/image";
import flixia from '../public/flixia.png'

const Nav = () => {

  return (
    <nav className="bg-[#ECECEC] sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="w-32 lg:w-40">
          <Image src={flixia} alt="logo" className="" />
        </div>
        <div className="">
          <div className="mr-5">
            <button class="bg-[#13203C] hover:bg-[#13203C] text-white hover:text-white text-xl font-bold py-2 text-center px-4 rounded-full">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav