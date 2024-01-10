import React from "react";
import type { FC } from "react";
import { HusmusButton } from "./HusmusButton";
import { Property } from "./lib/definitions";

type Props = {
  property: Property;
};

export const PropertyCard: FC<Props> = ({ property }) => {
  return (
    <div className="text-white p-6 flex flex-col gap-3 bg-[#0141ff] bg-opacity-20 rounded-xl">
      <div> Rent: {property.rent} £</div>
      <div> Address: {property.address}</div>
      <HusmusButton property={property} />
    </div>
  );
};
