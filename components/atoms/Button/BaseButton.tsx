import { cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'dark';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  text: string;
}

const buttonVariants = cva(
  'w-24 rounded-full px-4 py-2 md:w-32 lg:w-40 font-bold transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-dark',
        dark: 'bg-dark text-white hover:bg-dark-light',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export function BaseButton({ 
  variant = "primary",
   text,
   className = "",
   ...props
 }: BaseButtonProps) {
const buttonClass = buttonVariants({ variant, className });

return <button className={twMerge(buttonClass)} {...props}>{text}</button>;
}
