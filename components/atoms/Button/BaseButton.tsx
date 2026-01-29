import React, { useMemo } from 'react';

interface BaseButtonProps {
    variant?: 'primary' | 'dark';
    text: string;
}

const handleVariant = (variant: BaseButtonProps["variant"]) => {
    const variants = {
        primary: 'w-24 rounded-full bg-white px-4 py-2 font-bold text-black md:w-32 lg:w-40',
        dark: 'w-24 rounded-full bg-gray-700 px-4 py-2 font-bold text-white md:w-32 lg:w-40',
    };
    return variants[variant ?? 'primary'];
};

export function BaseButton({ variant, text }: BaseButtonProps) {
  const buttonClass = useMemo(() => handleVariant(variant), [variant]);

  return (
    <button className={buttonClass}>
      {text}
    </button>
  );
}
