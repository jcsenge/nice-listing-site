"use client";

import React, { useState } from "react";
import type { FC } from "react";
import { PropertyCard } from "./PropertyCard";
import { LoadMoreButton } from "./LoadMoreButton";
import { properties } from "./properties";

export const SimpleMode: FC = () => {
  const [numberOfItems, setNumberOfItems] = useState(10);
  return (
    <div className="mt-8 h-full w-full mx-auto overflow-y-auto flex flex-col items-center justify-center gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
        {properties.slice(0, numberOfItems).map((property) => (
          <PropertyCard key={property.propertyId} property={property} />
        ))}
      </div>
      <LoadMoreButton
        numberOfItems={numberOfItems}
        setNumberOfItems={setNumberOfItems}
      />
    </div>
  );
};
