import React from "react";
import type { FC } from "react";

type Props = {
  numberOfItems: number;
  setNumberOfItems: (value: number) => void;
};

export const LoadMoreButton: FC<Props> = ({
  numberOfItems,
  setNumberOfItems,
}) => {
  return (
    <button
      className="bg-white text-black px-4 py-3 rounded-lg mx-auto"
      onClick={() => {
        setNumberOfItems(Math.min(100, numberOfItems + 10));
      }}
    >
      Load more nice properties
    </button>
  );
};
