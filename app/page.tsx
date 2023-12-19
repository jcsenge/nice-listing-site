"use client";

import Image from "next/image";
import { properties } from "./properties";
import { PropertyCard } from "./PropertyCard";
import { useState } from "react";
import { LoadMoreButton } from "./LoadMoreButton";

export default function Home() {
  const [numberOfItems, setNumberOfItems] = useState(10);
  return (
    <main className="flex flex-col items-center justify-between pt-24 px-4 sm:px-8 lg:px-16 h-screen">
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div>Welcome to</div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Nice listing site logo"
          width={600}
          height={150}
          priority
        />
      </div>
      <div className="h-full w-full overflow-y-auto flex flex-col items-center justify-center gap-3">
        <div className="grid grid-cols-3 gap-8 w-full">
          {properties.slice(0, numberOfItems).map((property) => (
            <PropertyCard key={property.propertyId} property={property} />
          ))}
        </div>
        <LoadMoreButton
          numberOfItems={numberOfItems}
          setNumberOfItems={setNumberOfItems}
        />
      </div>
      <div className="mt-6 mb-8">Yes you can scroll further down</div>
    </main>
  );
}
