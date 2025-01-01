"use client"

import * as React from "react"
 
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"

import Image from "next/image";

const Cards = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
 
  return (
    <Card className="relative w-[500px] flex items-center justify-center rounded">
         <Image
                          src="/house.jpeg"
                          alt="rent"
                          className="dark:invert bg-cover rounded"
                          width={350}
                          height={150}
                          priority                 
                  />
     {/* <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
          <CarouselItem>
                         <Image
                          src="/house.jpeg"
                          alt="rent"
                          className="dark:invert bg-cover"
                          width={200}
                          height={100}
                          priority                 
                  />
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
   */}
    </Card>
  
  )
}

export default Cards


