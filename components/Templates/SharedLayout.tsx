import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type SharedLayoutProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export default function SharedLayout({ children, className, ...props }: SharedLayoutProps) {
  return (
    <div className={twMerge("h-screen lg:h-[140vh]", className)} {...props}>
      <main className=' pb-24 pl-4 lg:space-y-24 lg:pl-16'>   
        {children}
      </main>
    </div>
  );
}
