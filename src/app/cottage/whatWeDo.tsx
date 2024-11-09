'use client'
import { motion, useInView} from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const WhatWeDo = () =>{

    const parentRefTitle = useRef(null);
    const parentRefSubtitle = useRef(null);
    const parentDescription = useRef(null);
    const parentTwoBased = useRef(null);
    const isInViewTitle = useInView(parentRefTitle, { once: true, amount: 0.8 });
    const isInViewSubtitle = useInView(parentRefSubtitle, { once: true, amount: 0.8 });
    const isInViewDescription = useInView(parentDescription, {once:true, amount: 0.8})
    const isInViewTwoBased = useInView(parentTwoBased, {once:true, amount: 0.8});

    return (
        <div className="w-full z-10 bg-white relative flex flex-col justify-center items-center text-center md:gap-16 gap-4 h-fit">
                <div 
                    ref={parentRefTitle}
                    className='h-16 overflow-hidden w-full flex items-end justify-center'>
                    <motion.h2
                        initial={{y:100}}
                        animate={{ y: isInViewTitle ? 0 : 100 }}
                        transition={{ duration: 0.8 }}
                        >
                        WHAT WE DO
                    </motion.h2>
                </div>
                <div
                    ref={parentRefSubtitle}
                    className='md:h-36 h-18 overflow-hidden w-full flex flex-col items-end justify-center'>
                        <div className='overflow-hidden md:h-16 w-full'>
                            <motion.h3 
                                className='md:text-7xl text-xl h-fit w-full'
                                initial={{y:200}}
                                animate={{ y: isInViewSubtitle ? 0 : 100 }}
                                transition={{ duration: 0.8 }}
                                >
                                Modular cabins for simple,
                            </motion.h3>
                        </div>
                        <div className='overflow-hidden md:h-16 w-full'>
                            <motion.h3 
                                className='md:text-7xl text-xl h-fit w-full'
                                initial={{y:200}}
                                animate={{ y: isInViewSubtitle ? 0 : 100 }}
                                transition={{ duration: 0.8 }}
                                >
                                sustainable <span className="italic">living</span>.
                            </motion.h3>
                        </div>
                </div>
                <div className='md:h-36 h-18 overflow-hidden w-full' ref={parentDescription}>
                    <motion.p 
                        className='mt-12'
                        initial={{y:200}}
                        animate={{ y: isInViewDescription ? 0 : 100 }}
                        transition={{ duration: 0.8 }}
                    >
                        We produce high-performance,  <br/>
                        compact homes that let you escape the <br/>
                        everyday to a space that is good for you.
                    </motion.p>
                </div>
                <div className='md:h-80vh w-full px-5 md:px-12 rounded-md relative my-12'>
                    <motion.div 
                        className='rounded-md h-full overflow-y-hidden flex justify-center items-center'
                        initial={{opacity:0, scale:0.8}}
                        animate={{opacity:1, scale:1}}
                        transition={{duration:4}}>
                        <Image
                            alt='gambar summer cottage'
                            src={'/cottage/summer-shot.webp'}
                            layout="responsive"
                            width={0} // Adjust these to fit your image size
                            height={0}
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
                <div className='flex flex-wrap justify-between text-left w-full md:px-12 px-5'>
                    <h3 className='md:basis-1/2 md:text-5xl text-2xl'>Your base camp, <br/>no matter your <span className='italic'>mountain</span>.</h3>
                    <p className='md:basis-1/2'>
                        Built to go virtually anywhere, our models <br/>
                        are the starting and end point for all your adventures.
                    </p>
                    <div className='flex flex-wrap justify-between w-full basis-full gap-5'>
                        <CottageItem 
                            image={["/cottage/black_1.webp", "/cottage/black_2.webp"]} 
                            title='BASE 1'
                            description='Our signature model has the basics covered. Compact yet generous, efficient yet flexible, it maximizes its space for your comfort.'
                            subtitle='1 BEDROOM LOFT'/>
                        <CottageItem 
                            image={["/cottage/white_1.webp", "/cottage/white_2.webp"]} 
                            title='BASE 2'
                            description='Our upgraded model offers an extra bedroom off the end of the cabin. You’ll find everything else just as it is in the BASE 1.'
                            subtitle='2 BEDROOM LOFT'/>
                    </div>
                </div>
                <div ref={parentTwoBased} className='mt-12'>
                    <div className='basis-full overflow-hidden md:text-5xl text-2xl'>
                        <motion.h3
                            initial={{ y: 100}}
                            animate={isInViewTwoBased ? { y: 0 } : {}}
                            transition={{ duration: 1 }}>
                        Two base models.
                        </motion.h3>
                    </div>
                    <div className='basis-full overflow-hidden md:text-5xl text-2xl'>
                        <motion.h3
                            initial={{ y: 100}}
                            animate={isInViewTwoBased ? { y: 0 } : {}}
                            transition={{ duration: 1 }}>
                            Unlimited adventures.
                        </motion.h3>
                    </div>
                </div>
                <RechargeLifeBattery/>
        </div>
    )
}

interface CottageData {
    image: string[];
    title: string;
    description: string;
    subtitle: string;
}

const CottageItem = ({image, title, description, subtitle}:CottageData) => {
    const [indexImage, setIndexImage] = useState(0);
    const changeImage = ()=>{
        if(indexImage == 0 ) setIndexImage(1);
        else setIndexImage(0);
    }

    const ref = React.useRef(null);
    const refImage = useRef(null);
    const isInView = useInView(ref, { once: true, amount:0.8 });
    const isImageInView = useInView(refImage, {once:true, amount:0.8})

    return (
        <div className='flex flex-wrap md:basis-2/5 basis-full'>
            <div className='basis-full relative h-72 overflow-hidden' ref={refImage}>
                <motion.div 
                    initial={{ y: 300}}
                    animate={isImageInView ? { y: 0 } : {}}
                    transition={{ duration: 1 }}>
                    <Image
                        alt='gambar summer cottage'
                        src={image[0]}
                        layout="responsive"
                        width={0} // Adjust these to fit your image size
                        height={0}
                        className={"w-full h-auto transition-opacity duration-500 absolute left-0 top-0 " + (indexImage==0?"opacity-100":"opacity-0")}
                    />
                    <Image
                        alt='gambar summer cottage'
                        src={image[1]}
                        layout="responsive"
                        width={0} // Adjust these to fit your image size
                        height={0}
                        className={"w-full h-auto transition-opacity duration-500 absolute left-0 top-0 " + (indexImage==1?"opacity-100":"opacity-0")}
                    />
                </motion.div>
                
                <button className='absolute left-0 top-1/2' onClick={changeImage}>&larr;</button>
                <button className='absolute right-0 top-1/2' onClick={changeImage}>&rarr;</button>
            </div>
            <div className='basis-1/2' ref={ref}>
                <div className='overflow-hidden h-8 relative'>
                    <motion.div
                        initial={{ y: 100}}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{ duration: 1 }}
                        className="text"
                    >
                        <h3 className='text-2xl font-bold'>
                        {title}
                        </h3>
                    </motion.div>
                </div>
                <div className='overflow-hidden h-8'>
                    <motion.p className=''
                        initial={{ y: 100}} // Start position and opacity
                        animate={isInView ? { y: 0 } : {}} // Target position and opacity when in view
                        transition={{ duration: 1 }}>
                        {subtitle}
                    </motion.p>
                </div>
            </div>
            <div className='basis-1/2 overflow-hidden'>
                <motion.p className='basis-full'
                    initial = {{y:300}}// Start position and opacity
                    animate={isInView ? { y: 0 } : {}} // Target position and opacity when in view
                    transition={{ duration: 1 }}>
                    {description}
                </motion.p>
            </div>
        </div>
    )
}

const RechargeLifeBattery = () => {
    return (
        <div className='w-full md:h-screen h-fit overflow-hidden relative flex justify-center'>
            <motion.div
                initial={{width:"80%", height:"100vh"}}
                animate={{width:"100%", height:"100vh"}}
                transition={{duration:2}}
                className='h-screen overflow-hidden relative'
                >
                <Image
                    alt={"life battery"}
                    src={"/cottage/life-battery.webp"}
                    sizes="100vw"
                    width={0}
                    height={0}
                    priority
                    className='w-full h-auto'
                />
            </motion.div>
            <h3 className='absolute top-10 left-10 text-white text-left md:text-5xl text-2xl'>
                A space to recharge life&apos;s <br/> batteries.
            </h3>
        </div>
    )
}

export default WhatWeDo;