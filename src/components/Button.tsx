import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../utils/cn';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-sm font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50";
  
  const variants = {
    primary: "bg-[#FB3640] text-white hover:bg-[#d12d36] shadow-[0_0_15px_rgba(251,54,64,0.3)] hover:shadow-[0_0_25px_rgba(251,54,64,0.5)]",
    outline: "border-2 border-[#FB3640] text-[#FB3640] hover:bg-[#FB3640] hover:text-white",
    ghost: "text-[#EAEAEA] hover:bg-white/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg uppercase tracking-wider"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
