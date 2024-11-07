import Image from "next/image";

const Hero = () => {
    return <div className="bg-background w-full min-h-screen items-center flex flex-col">
        <div className="h-1/5">

        </div>
        <div className="flex flex-wrap justify-around min-h-screen px-5 w-screen pt-12 pb-12 min-h-screen h-fit ">
            <div className="md:h-screen relative basis-full md:basis-2/5 basis-full aspect-3/2">
                <Image
                src={"/hero.webp"}
                alt="hero image"
                fill
                />
            </div>
            <div className="basis-full md:basis-2/5 flex flex-col justify-center gap-6 basis-full py-2">
                <h2 className="font-spacegrotesk md:text-6xl text-2xl font-bold">
                Samarinda budgeting guide
                </h2>
                <p className="font-spacegrotesk md:text-xl text-md">
                    Healthy finances are the foundation of a thriving building.
                    And the key to healthy finances is well-planned budget.
                    Our guide covers the essentials, from the breakdown of a budget to effective development strategies and practical ways to bring your budget to life.
                </p>
            </div>
        </div>
    </div>
}

export default Hero;