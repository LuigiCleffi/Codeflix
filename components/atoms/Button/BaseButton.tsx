import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  `w-24 rounded px-4 py-1.5 md:w-32 lg:w-40 
  font-semibold cursor-pointer text-sm md:text-base md:text-md
  hover:opacity-75 transition duration-300 ease-in-out
  shadow-md hover:shadow-lg
  md:px-8 md:py-2.5
  `,
  {
    variants: {
      variant: {
        primary:
          'bg-white text-stone-900 hover:bg-stone-300 hover:text-stone-950',
        dark: 'bg-stone-800 text-stone-100 hover:bg-stone-700 hover:text-stone-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string;
}

export function Button({ variant, text, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(buttonVariants({ variant }), className)}
      {...props}
    >
      {text}
    </button>
  );
}
