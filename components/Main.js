import Image from "next/image";
import disney from '../public/disney.jpg'

const Main = () => {
    return(
        <div className="bg-[#13203C]">
            <div className="flex flex-col justify-center lg:flex-row items-center">
                <div className="sm:w-[700px]">
                    <Image src={disney} alt="movies" className="" />
                </div>
                <div className="sm:ml-10 sm:justify-center text-center">
                    <h1 className="text-2xl sm:text-3xl text-white font-bold mb-5">Great Entertainment</h1>
                    <button className="bg-[#FBBB47] text-xl text-white py-2 px-4 font-bold rounded-full">Start your free trial</button>
                </div>
            </div>
        </div>
    )
}

export default Main