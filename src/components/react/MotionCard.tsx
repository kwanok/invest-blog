import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

export default function MotionCard({ children }: PropsWithChildren) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
