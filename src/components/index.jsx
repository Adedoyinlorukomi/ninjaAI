import React from "react";
import '.././assets/style.css'

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });


setTimeout(function () { myFunction("1"); }, 2000);

function myFunction(value) {
  document.getElementById("index").innerHTML = value +  "😛";
}

setTimeout(function () { myFunction1("2"); }, 2200);

function myFunction1(value) {
  document.getElementById("index").innerHTML = value + "😚";
}


myPromise.then(
  function(value) {console.log(value);},
  function(error) {console.log(error);}
);

const ourPromise = new Promise(function(ourResolve, ourReject) {
  setTimeout(function(){ ourResolve("ss"); }, 2800);
});

ourPromise.then(function(value) {
    document.getElementById("index").innerHTML = value;
    document.getElementById("index").style.backgroundColor = "white";
    document.getElementById("index").style.color = "black";
    document.getElementById("index").style.fontSize = "19px";
  });
  
  let checkPromise = new Promise(function (check1, check2) {
      
  setTimeout(function () { check1("Yes"); }, 30000);
  })
  
  checkPromise.then(
    function(value) {document.getElementById("index1").innerHTML = value;}
  );


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