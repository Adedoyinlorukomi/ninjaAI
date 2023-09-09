import '../assets/style.css'
import React, { useState, useEffect } from 'react';



const texts = [
    "Are you looking for the right delivery services...",
    "We are just a call away . . .",
    "Waiting to hear from you . . .",
    "Thanks for your patronage . . .",
    "At Ninja, we treat you like the king/queen you truly are...",
    "You can order foods from your favorite restaurants and eateries",
    "We give you the best!",
    "Ninja Services are topnotch",
    "Order with confidence",
    "Thank you"
  ];



const Index = () => {

    const [Former, setFormer] = useState(0);
    const [Motion, setMotion] = useState('');
    const [inMotion, setinMotion] = useState(true);


    useEffect(() => {
        const formerText = texts[Former].split(" ");
        let currentText = 0;
        let currentWord = "";
      
        const typingInterval = setInterval(() => {
          if (inMotion) {
            if (currentText < formerText.length) {
              currentWord += formerText[currentText] + " ";
              setMotion(currentWord);
              currentText++;
            } else {
              setinMotion(false);
              setTimeout(() => {
                setinMotion(true);
                currentText = 0;
                currentWord = "";
                setFormer((prevIndex) => (prevIndex + 1) % texts.length);
              }, 500);
            }
          } else {
            if (currentWord === "") {
              setTimeout(() => {
                setMotion("");
              }, 500);
            } else {
              currentWord = currentWord.slice(0, -1);
              setMotion(currentWord);
            }
          }
        }, 500);
      
        return () => clearInterval(typingInterval);
      }, [Former, inMotion]);

    return(
        <div className="grid grid-cols-5 h-[100vh] lg:grid lg:grid-cols-2">
                <div className="col-span-3 flex flex-col gap-[47%] pl-16 bg-[#FDFDFD] sm:h-[500px]" id="first">
                    <div class='flex'>
                        <svg width="100" height="100" id='svg'>
                            <circle cx="50" cy="50" r="20" stroke="rgb(153 27 27)" stroke-width="4" fill="none" />
                        </svg>
                        <span id="dee" className=" font-bold text-[24px] pt-4">ninJa</span>
                    </div>
                    <div className='text-5xl lg:text-4xl sm:text-3xl font-bold lg:font-semibold sm:font-medium w-[80%]
                  font-[Montserrat]'>
                         <div>
                            {Motion}
                            {inMotion && <div className=""></div>}
                        </div>    
                    </div>
                </div>
                
                <div className="col-span-2 grid grid-rows-5 gap-8 sm:h-[520px]" id="second">
                    <div className="flex flex-col row-span-3 sm:gap-10 self-end">
                        <div className="text-[50px] font-black text-center lg:font-bold sm:font-medium" id="get">Get Started</div>
                        {/* <Link to='/'>Log In</Link>
                        <Link to='/'>Sign Up</Link> */}
                        <div className="flex gap-6 justify-center">
                            <div className=" bg-black text-white px-[80px] py-3 lg:px-[60px] sm:px-[40px] sm:py-1 rounded-lg" id='log'>Log In</div>
                            <div className="bg-black text-white px-[80px] py-3 lg:px-[60px] sm:px-[40px] sm:py-1 rounded-lg animate-pulse">Sign Up</div>
                        </div>
                    </div>
        
                    <div className="self-end row-span-2 text-center">
                        <div class='text-red-800 font-semiold text-[30px]'>
                            <span className="font-[Poppins]">ninJa</span>
                           
                        </div>
        
                        <div className='text-[16px] lg:text-sm sm:text-xs'>
                            <span>Terms of use</span>
                            <span>|</span>
                            <span>Privacy Policy</span>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
)
            
        }


export default Index