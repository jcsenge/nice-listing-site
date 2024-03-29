import React from "react";
import type { FC } from "react";

type NumberInput = {
  value: number;
  setValue: (value: number) => void;
};

type StringInput = {
  value: string;
  setValue: (value: string) => void;
};

type Props = {
  name: string;
};

export const Input: FC<Props & StringInput> = ({ name, setValue, value }) => {
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

export const NumberInput: FC<Props & NumberInput> = ({
  name,
  setValue,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-yellow-100">{name}</div>
      <input
        className="text-blue-950 px-3 py-3 rounded-md bg-yellow-100 bg-opacity-80"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
};
