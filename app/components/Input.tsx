import React from "react";
import type { FC } from "react";

type Props = {
  name: string;
  value: string;
  setValue: (value: string) => void;
};

export const Input: FC<Props> = ({ name, setValue, value }) => {
  return (
    <div className="flex flex-col">
      <div className="text-yellow-100">{name}</div>
      <input
        className="text-blue-950 px-3 py-3 rounded-md bg-yellow-100 bg-opacity-80"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
