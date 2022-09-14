import Image from "next/image"
import Toy from '../public/toy.jpg'

const Signup = () => {
    return(
        <div className="bg-[#13203C] text-white sm:flex sm:items-center sm:justify-around justify-center">
            <div className="min-h-full py-12 px-4 sm:px-6 lg:px-8 ">
                <div className="mb-5">
                    <h1 className="text-2xl font-bold ">Sign up</h1>
                </div>
                <div className="mb-5">
                    <h2 className="text-xl">Email</h2>
                    <form>
                        <div>
                            <div>
                                <input type="email" autoComplete="none" required className="appearance-none rounded-none relative block w-full sm:w-96 px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <h2>Password</h2>
                    <form>
                        <div>
                            <div>
                                <input type="password" autoComplete="none" required className="appearance-none rounded-none relative block w-full sm:w-96 px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="password" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="mt-5">
                    <button className="bg-[#FBBB47] text-xl text-white py-2 px-4 font-bold rounded-full sm:w-96">Sign up</button>
                </div>
            </div>
            <div className="hidden lg:flex lg:w-[700px]">
                <Image src={Toy} alt="toy" />
            </div>
        </div>
    )
}

export default Signup