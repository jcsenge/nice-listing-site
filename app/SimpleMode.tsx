import React from "react";
import type { FC } from "react";
import { PropertyCard } from "./PropertyCard";
import { Property } from "./lib/definitions";

export const SimpleMode: FC<{ properties: Property[] }> = async ({
  properties,
}) => {
  return (
    <div className="mt-8 h-full w-full mx-auto overflow-y-auto flex flex-col items-center justify-center gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};
