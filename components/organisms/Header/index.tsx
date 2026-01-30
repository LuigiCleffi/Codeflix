import Image from 'next/image';

export const Header = () => {
  return (
    <header className='fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 lg:px-10 lg:py-4'>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Image
          alt='codeflix logo'
          src='/images/codeflix_logo.png'
          width={60}
          height={60}
          priority
        />

        <ul className='hidden space-x-2 text-white md:flex md:space-x-4'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>
    </header>
  );
};
