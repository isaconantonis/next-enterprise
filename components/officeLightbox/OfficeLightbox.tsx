/* eslint-disable react/no-unescaped-entities */
"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React, { useState } from "react"

const OfficeLightbox: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const images = ["/office1.jpeg", "/office5.jpeg", "/office3.jpeg", "/office2.jpeg", "/office6.jpeg", "/office8.jpeg"]
  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }
  const closeLightbox = () => {
    setSelectedImage(null)
  }
  const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    setSelectedImage(images[currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1])
  }
  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    setSelectedImage(images[currentIndex + 1 >= images.length ? 0 : currentIndex + 1])
  }

  return (
    <div className="pt-10 md:px-60 lg:px-72 xl:px-96">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
          Looking for office space?
          <br /> we have you covered!
        </h2>
        <p className="mt-4 text-lg leading-8 text-primary-800">
          Explore a practical coworking space in the heart of Antwerp's Kammenstraat. Our cozy office setup is designed
          for productivity, offering a limited number of spots. Secure your place in the city center and be part of a
          workspace that balances comfort and inspiration.
        </p>
        <div className="mt-10 flex">
          <a href="/contact" className="mx-8 text-sm font-semibold leading-6 text-primary-800">
            Contact us for availability<span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="relative my-4 h-auto p-4 sm:p-4 md:p-0 lg:p-0 xl:p-0 2xl:p-0">
        <div className="m-auto grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          {images.map((image, index) => (
            <div className="m-auto" key={index}>
              <Image
                src={image}
                alt={`Image ${index}`}
                onClick={() => openLightbox(image, index)}
                className="cursor-pointer rounded-lg border border-primary-50 "
                width={450}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed left-0 top-0 p-2 flex h-full w-full items-center justify-center bg-black/70"
          onClick={closeLightbox}
        >
          <div className="max-h-2xl max-w-2xl">
            <Image src={selectedImage} alt="Selected Image" width={600} height={300} />
          </div>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-primary-500"
            onClick={handlePrev}
          >
            <ChevronLeftIcon className="h-8 w-8 p-1" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-primary-500"
            onClick={handleNext}
          >
            <ChevronRightIcon className="h-8 w-8 p-1" />
          </button>
        </div>
      )}
    </div>
  )
}

export default OfficeLightbox
