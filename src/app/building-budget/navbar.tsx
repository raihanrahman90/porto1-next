import Image from "next/image";

const Navbar = () => {
    return <nav className="flex justify-between px-12 w-full items-center bg-background">
        <Image 
          src={"/logo.png"}
          width={100}
          height={100}
          alt="logo"
          />
        <button className="bg-greenPrimary text-white h-10 rounded-md px-10">
          Get Started
        </button>
      </nav>
}

export default Navbar;