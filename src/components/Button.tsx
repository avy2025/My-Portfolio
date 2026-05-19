import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  href,
  target,
  rel,
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-sm font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-[#080209] hover:brightness-105 shadow-[0_0_15px_rgba(191,225,105,0.3)] hover:shadow-[0_0_25px_rgba(191,225,105,0.5)]",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-[#080209]",
    ghost: "text-[#EAEAEA] hover:bg-white/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg uppercase tracking-wider"
  };

  const styles = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={styles}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={styles}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
