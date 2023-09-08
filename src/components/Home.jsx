import React from "react";
import '../assets/style.css'



const Index = ()=> {
    return <>
    <div className="grid grid-cols-5 h-[100vh] sm:flex sm:flex-col">
        <div className="col-span-3 flex flex-col justify-between bg-[#FDFDFD]" id="first">
            <div class='self-start'>
                <span id="dee" className="text-black font-bold text-[24px]">DeeHUB</span>
            </div>
            <div id="index"></div>
            <div id="index1"></div>
        </div>
        <div className="col-span-2 grid grid-rows-5" id="second">
            <div className="flex flex-col gap-5 row-span-3 self-end">
                <div className="text-[50px] font-black" id="get">Get Started</div>
                {/* <Link to='/'>Log In</Link>
                <Link to='/'>Sign Up</Link> */}
                <div className="flex gap-6 justify-center">
                    <div className="bg-gray-700 text-white px-[80px] py-3 lg:px-[60px] sm:px-[40px] sm:py-1 rounded-lg">Log In</div>
                    <div className="bg-gray-700 text-white px-[80px] py-3 lg:px-[60px] sm:px-[40px] sm:py-1 rounded-lg">Sign Up</div>
                </div>
            </div>

            <div className="self-end row-span-2">
                <div class='text-red-800 font-semiold text-[30px]'>
                    <span className="">DeeHUB</span>
                    {/* <svg></svg> */}
                </div>

                <div>
                    <span>Terms of use</span>
                    <span>|</span>
                    <span>Privacy Policy</span>
                </div>
                
            </div>
            
        </div>
    </div>
    </>
}

export default Index