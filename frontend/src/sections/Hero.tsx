import ArrowIcon from "@/assets/arrow-right.svg";
import cylinderImage from "@/assets/cylinder.png";
import cogImage from "@/assets/cog.png";
import Image from "next/image";

export const Hero = () => {
  return (
  <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-clip ">
    <div className="container">
      <div className="md:flex items-center">
      <div className="md:w-[478px]">
        <div className=" text-4xl inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Vox Arena</div>
        <h1 className=" text-5xl md:text-7xlfont-bold tracking-tighter bg-gradient-to-b from-black to -[#001E80] text-transparent bg-clip-text mt-6" > Pathway to showcase your talent</h1>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6">
          Celebrate the joy of accomplishment when you get the real value of your talent and you get recognized . Whether you are a singer ,debater, musician or a standup comedian . By using 
        </p>
        <div className="flex gap-1 items-center mt-[30px]">
          <button className="btn btn-primary">Join Room</button>
          <button className="btn btn-text">
            <span>
            Learn more
            </span>
            <ArrowIcon className="h-5 w-5"/>
            </button>
        </div>
      </div>
      </div>
      {/* <div className="mt-20 md:mt-0 md:h-[640px] md:flex-1 lg:h-[640px] lg:ml-[auto] relative">
        <Image src={cogImage} alt="cog Image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 "/>
        <Image 
        src={cylinderImage} 
        width={220}
        height={220}
        alt="cylinder Image"
        className="hidden md:block -top-8 -left-32 md:absolute"/>
      </div> */}
    </div>
  </section>
  );
};
