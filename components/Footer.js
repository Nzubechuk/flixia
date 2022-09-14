import Image from "next/image"
import flixia from '../public/flixia.png'

const Footer = () => {
    return (
        <div className="bg-gray-900 flex justify-center">
            <div className="mt-5">
                <div className="w-32 m-auto">
                    <Image src={flixia} alt="logo" className="" />
                </div>
                <div className="flex items-center mt-2">
                    <p className="text-sm mr-3 text-[#FBBB47] cursor-pointer">Terms and Privacy Notice</p>
                    <p className="text-sm mr-3 text-[#FBBB47] cursor-pointer">Send us feedback</p>
                    <p className="text-sm mr-3 text-[#FBBB47] cursor-pointer">Help</p>
                </div>
                <div className="text-center mt-2">
                    <p className="text-white text-sm">&copy; 2022, Flixia.com, inc.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer