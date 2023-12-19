"use client";

import { useState } from "react";
import { Input } from "../components/Input";
import { HusmusButton } from "../HusmusButton";

type Props = {};

export default function DevMode({}: Props) {
  const [userName, setUserName] = useState<string>("test");
  const [rent, setRent] = useState<string>("test");
  const [address, setAddress] = useState<string>("test");
  const [propertyId, setPropertyId] = useState<string>("test");
  return (
    <div className="flex flex-col items-center justify-between pt-8 pb-20 sm:pt-16 px-4 sm:px-8 lg:px-16 w-full max-w-2xl mx-auto">
      <div className="text-white p-6 flex flex-col gap-3 bg-[#0141ff] bg-opacity-20 rounded-xl">
        <div>
          Welcome to dev mode! 👷🔨 This form can be used to test the fast track
          button with custom data. Please provde all the fields below, there is
          no validation yet.
        </div>
        <Input name="Username" value={userName} setValue={setUserName} />
        <Input name="Rent" value={rent} setValue={setRent} />
        <Input name="Address" value={address} setValue={setAddress} />
        <Input name="PropertyId" value={propertyId} setValue={setPropertyId} />
        <div className="my-8 mx-auto">
          <HusmusButton
            property={{
              rent,
              propertyId,
              userId: userName,
              address,
              portalId: "nice-listing-site",
            }}
          />
        </div>
      </div>
    </div>
  );
}
