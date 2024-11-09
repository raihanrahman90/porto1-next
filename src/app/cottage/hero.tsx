'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const [opacityLevel, setOpacityLevel] = useState("100");

  // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            const scrolled =  1000 - window.scrollY
            console.log(scrolled)
            if(scrolled < 600) {
                setOpacityLevel("opacity-0")
            }else if(scrolled < 700) {
                setOpacityLevel("opacity-25")
            }else if(scrolled < 800) {
                setOpacityLevel("opacity-50")
            }else if(scrolled < 900) {
                setOpacityLevel("opacity-75")
            }else if(scrolled < 1000) {
                setOpacityLevel("opacity-100")
            }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative">
        <div className={"w-full flex flex-row justify-between px-8 py-12 z-10 fixed " + opacityLevel}>
            <svg width="157" height="53" viewBox="0 0 157 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cottageRed fill-current">
            <g>
            <path d="M157 53H74.3388L62.8543 28.059L50.151 53H0V0H157V53ZM78.769 46.5582H150.224V6.44183H6.77586V46.5585H45.904L63.1641 12.67L78.769 46.5585V46.5582Z" fill="currentColor"></path>
            <path d="M33.7576 25.5931C37.6272 26.5921 39.5621 28.9572 39.5621 32.6882C39.5621 35.0274 38.7537 36.9125 37.1367 38.3446C35.5197 39.7772 33.1908 40.4928 30.1504 40.4928H17.2148V12.5068H28.3265C31.5604 12.5068 33.9859 13.0981 35.6029 14.2806C37.2199 15.4631 38.0284 17.145 38.0284 19.326C38.0284 22.3217 36.6044 24.3848 33.7579 25.5142V25.5931H33.7576ZM24.0142 18.3012V23.6616H27.2896C28.3676 23.6616 29.259 23.4251 29.9639 22.9521C30.6687 22.4791 31.0211 21.8226 31.0211 20.9813C31.0211 19.1947 29.6944 18.3012 27.0409 18.3012H24.0142ZM27.9945 34.7379C29.3212 34.7379 30.3785 34.4817 31.1662 33.9692C31.954 33.4568 32.3479 32.7276 32.3479 31.7816C32.3479 30.8886 31.9811 30.1724 31.2492 29.6334C30.5166 29.0951 29.4313 28.8253 27.9945 28.8253H24.0142V34.7379H27.9945Z" fill="currentColor"></path>
            <path d="M97.5237 40.8873C93.4047 40.8873 89.7841 39.3895 86.6611 36.3937L90.7658 31.5848C92.9218 33.8186 95.2293 34.9353 97.6898 34.9353C99.901 34.9353 101.007 34.1733 101.007 32.6491C101.007 31.8871 100.702 31.2892 100.095 30.8556C99.4864 30.422 98.3255 29.9293 96.6118 29.3775C95.2851 28.9575 94.172 28.5367 93.2742 28.1161C92.3758 27.6961 91.4563 27.1376 90.517 26.4409C89.5771 25.7447 88.8723 24.8975 88.4025 23.8985C87.9321 22.9 87.6977 21.7441 87.6977 20.4297C87.6977 18.1178 88.6305 16.1666 90.4963 14.5763C92.362 12.9866 94.6351 12.1657 97.3167 12.1127C101.048 12.0869 104.461 13.3088 107.557 15.7785L103.618 20.6663C101.269 18.8794 99.251 17.9859 97.5654 17.9859C96.7362 17.9859 96.0792 18.183 95.596 18.5771C95.1122 18.9713 94.8705 19.4974 94.8705 20.1538C94.8427 20.7587 95.1256 21.2711 95.7204 21.6911C96.3143 22.1116 97.4545 22.6241 99.141 23.2284C100.025 23.5437 100.592 23.7475 100.841 23.8393C101.09 23.9318 101.594 24.1289 102.354 24.4306C103.114 24.7329 103.611 24.9566 103.847 25.1007C104.081 25.2453 104.482 25.4818 105.049 25.8102C105.615 26.1392 105.996 26.4212 106.189 26.6577C106.382 26.8942 106.659 27.2162 107.019 27.6234C107.377 28.0312 107.62 28.4315 107.744 28.8256C107.869 29.2198 107.986 29.6798 108.097 30.2052C108.207 30.7313 108.262 31.2959 108.262 31.9002C108.262 33.1615 108.041 34.3113 107.599 35.3492C107.157 36.3877 106.576 37.2412 105.858 37.9113C105.139 38.5814 104.303 39.1469 103.349 39.6063C102.396 40.0665 101.435 40.3946 100.468 40.5917C99.4998 40.7888 98.519 40.8873 97.524 40.8873H97.5237Z" fill="currentColor"></path>
            <path d="M120.492 40.4928V12.5068H139.689V18.38H127.292V23.7408H137.077V29.5351H127.292V34.6199H140.559V40.4931H120.492L120.492 40.4928Z" fill="currentColor"></path>
            </g>
            </svg>
            <div className="">
                <div className="bg-white px-5 py-4">
                    Join the Waitlist
                </div>
            </div>
        </div>
        <div className="fixed h-screen w-full overflow-y-hidden z-0">
            <video autoPlay muted loop className="md:w-full md:h-auto h-screen w-auto object-cover">
                <source src="/cottage/hero.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
        <motion.div 
            className={"absolute bottom-10 px-8 text-white text-6xl font-bold " + opacityLevel}
            initial={{opacity:0, scale:0.8}}
            animate={{opacity:1, scale:1}}
            transition={{duration:2}}>
            Dream big, live simple.
        </motion.div>
    </div>
  )
}

export default Hero;