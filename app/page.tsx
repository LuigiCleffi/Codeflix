import { Button } from '@/components/atoms/Button';
import SharedLayout from '@/components/Templates/SharedLayout';
import Image from 'next/image';

export default function Home() {
  return (
    <SharedLayout className='relative overflow-hidden bg-linear-to-b from-black/60 to-black/90'>
      <div className='flex flex-col space-y-2 py-16 lg:h-[65vh] lg:justify-end lg:pb-12'>
        <div className='absolute top-0 left-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
          <Image
            src='/images/stranger_things_cover.jpg'
            alt='Stranger Things'
            layout='fill'
            fill={true}
            className='h-[65vh] object-cover object-center lg:h-[95vh]'
            priority
          />
        </div>

        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
          Stranger Things
        </h1>
        <p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl'>
          Stranger Things is a thrilling Netflix series that blends supernatural elements with 1980s nostalgia.
        </p>
      </div>
      <div className='flex space-x-8'>
        <Button
          variant='primary'
          text='Play'
          className='gap-x-2 rounded shadow-white/40'
        />
        <Button variant='dark' text='More info' className='shadow-white/40' />
      </div>
    </SharedLayout>
  );
}
