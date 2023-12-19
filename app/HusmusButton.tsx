import Link from "next/link";
import React from "react";
import type { FC } from "react";
import { Property } from "./properties";

export const HusmusButton: FC<{ property: Property }> = ({ property }) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-400 px-6 py-3 text-black rounded-xl"
      prefetch={false}
      href={`https://husmus.uk/fast-track?rent=${property.rent}&propertyId=${property.propertyId}&userId=${property.userId}&portalId=${property.portalId}&address=${property.address}`}
    >
      Fast track with Husmus!
    </Link>
  );
};
