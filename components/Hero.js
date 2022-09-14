import Image from "next/image";
import wall from '../public/wall.jpg'

const Hero = () => {
    return(
        <div className="bg-[#13203C] lg:flex flex-row-reverse">
             <div className="">
                <Image src={wall} alt="movies" className="" />
            </div>
            <div className="text-center">
                <div className="mt-5">
                    <h1 className="text-white text-3xl font-bold">Welcome to Flixia</h1>
                </div>
                <div className="mt-5 lg:mt-16">
                    <p className="text-white text-2xl mt-5">Enjoy exclusive popular movies and TV shows for ₦2,300/month. Watch now, cancel anytime.</p>
                </div>
                <div className="mt-5 lg:mt-20 justify-center flex">
                    <button className="bg-[#FBBB47] text-xl text-white py-2 px-4 font-bold rounded-full">Start your 14-days free trial</button>
                </div>
                <div className="mt-10 lg:mt-20">
                    <p className="text-sm sm:text-xl text-white">*Cancel your trial at any time</p>
                </div>
            </div>
        </div>
    )
}

export default Hero