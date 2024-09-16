import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title">SignUp for free today</h2>
        <p className="section-description mt-5">
          Get started for free and start earning crypto while showcasing your talent
        </p>
        <Image src={starImage} alt="Star Image" width={360} className="absolute -left-[350px] -top-[137px] "/>
        <Image src={springImage} alt="Spring Image" width={360} className="absolute -right-[331px] -top-[19px] "/>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1"><span>Learn more</span>
          <ArrowRight className="h-5 w-5"/>
          </button>
        </div>
      </div>
    </section>
  );
};