import Link from "next/link";
import React from "react";
import type { FC } from "react";

export const HusmusButton: FC = ({}) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-400 p-6 text-black rounded-xl"
      prefetch={false}
      href="https://husmus.uk/fast-track?rent=10000&propertyId=property-1&userId=reka-user-1&portalId=portal-1&address=49%2520Featherstone%2520Street%252C%2520LONDON%252C%2520EC1Y%25208SY"
    >
      Fast track with Husmus!
    </Link>
  );
};
