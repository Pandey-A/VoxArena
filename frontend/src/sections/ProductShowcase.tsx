import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b bg-white from-[rgb(255,255,255)] to-[#D@DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
        <div className=" flex justify-center">
        
        <div className="tag">Coming Soon</div>
        </div>
        <h2 className=" section-title mt-5">
          More effective way to enhance your talent 
          </h2>
        <p className=" section-description mt-5">
        As you win more you get recogonition by other people we give you a personal dashboard to track your progress and how much have you earned by winning
        </p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10"/>
        <Image src={pyramidImage} alt='Pyramid Image' height={262} width={262} className="hidden md:block absolute -right-36 -top-32 "/>
        <Image src={tubeImage} alt='Tube Image' height={248} width={262} className=" hidden md:block absolute bottom-24 -left-36 "/>
      </div>
      </div>
      
    </section>
  );
};
