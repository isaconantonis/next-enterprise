  /* eslint-disable react/no-unescaped-entities */
  'use client'
  import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
  import Image from 'next/image';
  import React, { useState } from 'react';

  const OfficeLightbox: React.FC = () => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    
    const media = [
      '/office1.jpeg',
      '/office5.jpeg',
      '/office3.jpeg',
      '/office2.jpeg',
      '/office6.jpeg',
      '/office8.jpeg',
    ];

    const bannerMedia = '/officeVid2.mp4'
    
    const checkedMedia = media.map(url => {
      const isVideo = url?.split('.').pop()?.toLowerCase() === 'mp4' || url?.split('.').pop()?.toLowerCase() === 'webm' || url?.split('.').pop()?.toLowerCase() === 'ogg'; // introduced optional chaining to satisfy ts; look into typing this as well
      return {url, isVideo};
    });

    const openLightbox = (image: string, index: number) => {
      setSelectedImage(image);
      setCurrentIndex(index);
    };

    const closeLightbox = () => {
      setSelectedImage(null);
    };

    const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      const newIndex = currentIndex === 0 ? media.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(media[newIndex]);
    };

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      const newIndex = currentIndex === media.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(media[newIndex]);
    };

    return (
    <div className='md:px-60 lg:px-72 xl:px-96 pt-10'>
      <div className='text-center px-2 sm:px-0'>
        <h2 className='text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl'>Looking for office space?<br/> We have you covered!</h2>
        <p className='mt-4 text-lg leading-8 text-primary-800'>Explore a practical coworking space in the heart of Antwerp's Kammenstraat. Our cozy office setup is designed for productivity, offering a limited number of spots. Secure your place in the city center and be part of a workspace that balances comfort and inspiration.</p>
      </div>
      <div className='mt-4 flex'>
        <a href='/contact' className='text-sm font-semibold leading-6 text-primary-800 mx-8 mb-4'>Contact us for availability<span aria-hidden="true">→</span></a>
      </div>
      <div className="relative mb-[104vh] md:mb-[806px]">
            <video
            poster="/officeVid2Placeholder.png"
            id='bannerVideo'
            className='absolute h-[100vh] md:h-[800px] w-full object-cover md:rounded-lg'
            controls
            >
              <source src={bannerMedia} type="video/mp4"/>
              <source src={bannerMedia} type="video/webm"/>
              <source src={bannerMedia} type="video/webm"/>
            </video>
      </div>
      <div className='my-4 p-4 relative sm:p-4 md:p-0 lg:p-0 xl:p-0 2xl:p-0 h-auto'>
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-1">
          {checkedMedia.map((item, index) => (
            <div key={index}>
            {item?.isVideo ? (
              <video
              key={index}
              className="cursor-pointer object-fill w-full h-[400px] rounded-lg"
              onClick={() => openLightbox(item.url, index)}
              controls  
            >
              <source src={item.url} type="video/mp4"/>
              <source src={item.url} type="video/webm"/>
              <source src={item.url} type="video/webm"/>
            </video>
          ) : (
              <Image
              key={index}
              src={item.url}
              alt={`Image ${index}`}
              onClick={() => openLightbox(item.url, index)}
              className="cursor-pointer object-cover h-[400px] border rounded-lg border-primary-50"
              width={600}
              height={400}
              />
            )}
            </div>  
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70"
          onClick={closeLightbox}
        >
        {selectedImage?.endsWith('.mp4') || selectedImage?.endsWith('.webm') || selectedImage?.endsWith('.ogg') ? (
          <video
            src={selectedImage} 
            autoPlay
            controls
            muted
            loop
            className="object-fill sm:object-contain w-full h-full" // Adjust size as needed
          />
        ) : (
          <Image
            src={selectedImage}
            alt="Selected Image"
            fill={true}
            className="object-contain px-1"
          />
        )}
          <button
            className='absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 rounded-full p-1 text-primary-500'
            onClick={handlePrev}
          >
            <ChevronLeftIcon className='h-8 w-8 p-1' />
          </button>
          <button
            className='absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 rounded-full p-1 text-primary-500'
            onClick={handleNext}
          >
            <ChevronRightIcon className='h-8 w-8 p-1'/>
          </button>
        </div>
      )}
    </div>
    );
  };

  export default OfficeLightbox;
