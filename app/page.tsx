import { Button } from '@/components/atoms/Button/root';
import SharedLayout from '@/components/Templates/SharedLayout';

export default function Home() {
  return (
    <SharedLayout>
      <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
        <div className='absolute top-0 left-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'></div>
        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
          The Witcher
        </h1>
        <p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl'>
          Geralt of Rivia, a solitary monster hunter, struggles to find his
          place in a world where people often prove more wicked
        </p>
      </div>
      <div className='flex space-x-4'>
        <Button.baseStyle variant="primary" text="Play" />
        <Button.baseStyle variant="dark" text="More info" />
      </div>
    </SharedLayout>
  );
}
