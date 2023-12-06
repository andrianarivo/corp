import type { StaticImageData } from "next/image"
import Image from 'next/image'

interface HeroProps {
  title: string
  imgAlt: string
  imgData: StaticImageData
}

export default function Hero({title, imgAlt, imgData}: HeroProps) {
  return (
      <div className="relative h-screen">
        <div className="absolute -z-10 inset-0">
          <Image
              fill
              className="object-cover"
              src={imgData}
              alt={imgAlt} />
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-r from-slate-900"/>
        <div className="pt-48 flex justify-center items-center">
          <h1 className="text-white text-6xl">{title}</h1>
        </div>
      </div>
  )
}