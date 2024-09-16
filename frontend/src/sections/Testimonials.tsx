import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "As a introvert person I couldn't showcased my talent of singing with everyone Vox Arena has given me a platform to do so.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera (Singer)",
    username: "@jamietechguru00",
  },
  {
    text: "I have been using Vox Arena for a few months now and I can't recommend it enough. It has helped me showcase my talent and earn crypto.",
    imageSrc: avatar2.src,
    name: "Josh Smith (Comedian)",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed my lifestyle I can finally earn some side income.",
    imageSrc: avatar3.src,
    name: "Morgan Lee (Debater)",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0,3);
const secondColumn = testimonials.slice(3,6);
const thirdColumn = testimonials.slice(6,9);


const TestimonialsColumn = (props:{className?:string, testimonials:typeof testimonials}) => (
  <div className={twMerge("flex flex-col gap-6 mt-10 [mask-image:linear-gardient(to_top,transparent,black_25%,black_75%,transparent)]",props.className)}>
          {props.testimonials.map(({text, imageSrc, name, username}) => (
            <div className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5"><Image src={imageSrc} width={40} height={40} alt={name} className="w-10 h-10 rounded-full"/></div>
              <div className="flex flex-col">
              <div className=" font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
            </div>
          ))}
        </div>
)

export const Testimonials = () => {
  return (
    <section className="bg-white ">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center">
        <div className="tag">Testimonials</div>
        </div>
        <h2 className="section-title mt-5">What our users say</h2>
        <p className="section-description mt-5">
          By using our DApp people around the world with introvert nature but good talent have gained recogonition and earned a lot of money
        </p>
        </div>
        <div className="flex justify-center gap-6">
        <TestimonialsColumn testimonials={firstColumn} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:flex"/>
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:flex"/>
      </div>
      </div>
    </section>
  );
};
