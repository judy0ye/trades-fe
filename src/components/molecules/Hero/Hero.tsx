import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const fullBackground = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);  
  const middleBackground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const text = useTransform(scrollYProgress, [0, 1], ["-50%", "200%"]);
  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden grid place-items-center ">
      <motion.h1 style={{ y: shouldReduceMotion ? 0 : text}} className="text-center z-20 bg-black bg-opacity-90 text-xl sm:text-2xl md:text-3xl font-bold text-white p-2 md:p-4 rounded">Empower Your Path to Financial Freedom</motion.h1>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/full.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y: shouldReduceMotion ? 0 : fullBackground
        }}
      />
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: 'url(/middle.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y: shouldReduceMotion ? 0 : middleBackground
        }}
      />
      <div
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: 'url(/bottom.png',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
    </div>
  );
};
