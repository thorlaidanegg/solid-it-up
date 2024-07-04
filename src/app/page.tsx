'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import hero from '../../public/hero.png';
import { ParallaxScroll } from '@/components/parallaxScroll';
import { FlipWords } from '@/components/ui/flip-words';
import Footer from '@/components/footer';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();
  const words = ["better", "cute", "beautiful", "modern"];
  const [isBlackBackground, setIsBlackBackground] = useState(false);

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
      <div className="relative w-full h-[90vh] pt-16"> {/* Adjusted padding */}
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
