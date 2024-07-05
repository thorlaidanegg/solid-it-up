'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import hero from '../../public/hero.png';
import { ParallaxScroll } from '@/components/parallaxScroll';
import { FlipWords } from '@/components/ui/flip-words';
import Footer from '@/components/footer';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  const router = useRouter();
  const words = ["better", "cute", "beautiful", "modern"];
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  useEffect(() => {
    if (inView1) {
      controls1.start({ x: 0, opacity: 1 });
    }
    if (inView2) {
      controls2.start({ x: 0, opacity: 1 });
    }
  }, [controls1, controls2, inView1, inView2]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const zoomElement = document.getElementById('background-image');

      if (zoomElement) {
        if (scrollPosition > 0 && scrollPosition <= window.innerHeight) {
          zoomElement.classList.add('scale-110');
        } else {
          zoomElement.classList.remove('scale-110');
        }
      }

      if (scrollPosition > window.innerHeight) {
        setIsBlackBackground(true);
      } else {
        setIsBlackBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`text-3xl transition-colors duration-500 ${isBlackBackground ? 'bg-black text-white' : ''}`}>
      <div className="relative w-full h-[90vh] pt-16">
        <div id="background-image" className="absolute top-0 left-0 w-full h-full overflow-hidden transition-transform duration-500 ease-out">
          <Image src={hero} alt="Hero" layout="fill" objectFit="cover" />
          <div className="h-[40rem] flex justify-center items-center mr-[100vh]">
            <FlipWords words={words}/>
          </div>
        </div>
      </div>

      <div className="h-[70vh] text-9xl flex items-center">
        <h1>Solid It UP</h1>
      </div>

      <div className="h-[70vh] text-9xl flex items-center">
        <h1>Have Some cool design in Mind?</h1>
      </div>
      
      <motion.div
        ref={ref1}
        initial={{ x: '80vw', opacity: 0.5 }}
        animate={controls1}
        transition={{ type: 'spring', stiffness: 70 }}
        className="text-7xl text-right mb-24 flex justify-end  gap-10"
      >
        Let AI fix it <Button className='text-4xl w-48 h-16 mr-40 ml-10 hover:bg-slate-700'>Go</Button>
      </motion.div>

      <div className="h-[70vh] text-9xl flex items-center">
        <h1>OR a nice picture...</h1>
      </div> 
      
      <motion.div
        ref={ref2}
        initial={{ x: '80vw', opacity: 0 }}
        animate={controls2}
        transition={{ type: 'spring', stiffness: 70 }}
        className="text-7xl text-right mx-52 mb-24 flex justify-end"
      >
        Make your own one <Button className='text-4xl w-48 h-16  ml-10 p-9 hover:bg-slate-700'>Go</Button>
      </motion.div>

      <ParallaxScroll />

      <div className="h-[80vh] text-8xl flex items-center justify-between">
        Checkout The Store
        <Button className="text-4xl w-60 h-20 mr-40 hover:bg-slate-700" onClick={() => router.push('/store')}>Store</Button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
