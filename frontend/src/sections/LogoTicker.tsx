"use client";
import backpackLogo from '@/assets/backpack-logo.png';
import solanaLogo from '@/assets/logo-solana.png';
import solanapayLogo from '@/assets/logo-solanapay.png';
import phantomLogo from '@/assets/logo-phantom.png';
import solflareLogo from '@/assets/logo-solflare.png';
import bonkLogo from '@/assets/logo-bonk.png'
import Image from 'next/image';
import {motion} from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className=' py-8 md:py-12 bg-white '>
    <div className='container'>
      <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,white ,transparent,black,to_left,white,transparent)]'>
      <motion.div className=' flex gap-14 flex-none' animate={{
        translateX: "-50%",
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}>
        <Image src={backpackLogo} alt="Backpack Logo" className='logo-ticker-image' />
        <Image src={solanaLogo} alt="Solana Logo" className=' logo-ticker-image' />
        <Image src={bonkLogo} alt="Bonk Logo" className='logo-ticker-image' />
        <Image src={solflareLogo} alt="Solflare Logo" className='logo-ticker-image'/>
        <Image src={solanapayLogo} alt="Solana Pay Logo" className='logo-ticker-image' />
        <Image src={phantomLogo} alt="Phantom Logo" className='logo-ticker-image' />

{/*second set of logos */}

        <Image src={backpackLogo} alt="Backpack Logo" className='logo-ticker-image' />
        <Image src={solanaLogo} alt="Solana Logo" className=' logo-ticker-image' />
        <Image src={bonkLogo} alt="Bonk Logo" className='logo-ticker-image' />
        <Image src={solflareLogo} alt="Solflare Logo" className='logo-ticker-image'/>
        <Image src={solanapayLogo} alt="Solana Pay Logo" className='logo-ticker-image' />
        <Image src={phantomLogo} alt="Phantom Logo" className='logo-ticker-image' />
      </motion.div>
      </div>
    </div>
    </div>
  );
};
