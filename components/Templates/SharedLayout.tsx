import React, { PropsWithChildren } from 'react';

export default function SharedLayout({ children }: PropsWithChildren) {
  return (
    <div className='h-fulllg:h-[140vh] relative'>
      <main className='relative pb-24 pl-4 lg:space-y-24 lg:pl-16'>
        {children}
      </main>
    </div>
  );
}
