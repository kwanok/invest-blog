import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

export default function MotionCard({ children }: PropsWithChildren) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
