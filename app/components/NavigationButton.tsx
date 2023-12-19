"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import type { FC } from "react";

type Props = {};

export const NavigationButton: FC<Props> = ({}) => {
  const pathName = usePathname();
  return (
    <Link
      className="ml-auto bg-white text-black rounded-lg px-5 py-3"
      href={pathName === "/" ? "/devmode" : "/"}
    >
      {pathName === "/" ? "Dev mode" : "Back to simple view"}
    </Link>
  );
};
