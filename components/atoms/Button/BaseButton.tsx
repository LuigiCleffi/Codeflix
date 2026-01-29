import React from 'react';

interface BaseButtonProps {
    variant?: 'primary' | 'dark';
    text: string;
}

export function BaseButton({ variant, text }: BaseButtonProps) {
const handleVariant = () => {
    const variants = {
        primary: 'w-24 rounded-full bg-white px-4 py-2 font-bold text-black md:w-32 lg:w-40',
        dark: 'w-24 rounded-full bg-gray-700 px-4 py-2 font-bold text-white md:w-32 lg:w-40',
    };
    return variants[variant || 'primary'];
}
  return (
    <button className={handleVariant()}>
      {text}
    </button>
  );
}
