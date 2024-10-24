import React, { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion';

interface IComponentSlider{
    children: ReactNode
}

const ComponentSlider: React.FC<IComponentSlider> = ({ 
    children
 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); 

  
  const scale = useMotionValue(0.8);
  const opacity = useTransform(scale, [0.8, 1], [0, 1]);

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
      });
    } else {
      controls.start({
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeIn' },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }} // Use plain values here
        animate={controls}
        style={{ scale, opacity }} 
    >
        {children}
    </motion.div>
  );
};

export default ComponentSlider;
