"use client";

import { useState } from "react";
import { Input, NumberInput } from "../components/Input";
import { HusmusButton } from "../HusmusButton";

type Props = {};

export default function DevMode({}: Props) {
  const [domain, setDomain] = useState<string>("https://husmus.uk");
  const [userName, setUserName] = useState<string>("test");
  const [rent, setRent] = useState<number>(1234);
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
        <Input name="Domain" value={domain} setValue={setDomain} />
        <Input name="Username" value={userName} setValue={setUserName} />
        <NumberInput name="Rent" value={rent} setValue={setRent} />
        <Input name="Address" value={address} setValue={setAddress} />
        <Input name="PropertyId" value={propertyId} setValue={setPropertyId} />
        <div className="my-8 mx-auto">
          <HusmusButton
            customDomain={domain}
            property={{
              rent,
              id: propertyId,
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
