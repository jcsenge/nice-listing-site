import { redirect } from "next/navigation";
import { FC } from "react";
import { unstable_noStore as noStore } from "next/cache";
import { fetchPropertyById } from "../lib/data";

async function fetchData(propertyId: string) {
  noStore();
  const property = await fetchPropertyById(propertyId);

  if (!property) {
    redirect("/");
  }

  return property;
}

type Props = {
  searchParams: Record<string, string>;
  params: {
    propertyId: string;
  };
};

const PropertyPage: FC<Props> = async ({
  params: { propertyId },
  searchParams,
}) => {
  const property = await fetchData(propertyId);
  return (
    <div className="flex flex-col gap-3 text-white bg-[#0141ff] bg-opacity-60 p-5 rounded-lg">
      <div>Hi {searchParams.userId}, your data:</div>
      <div>stars: {searchParams.stars}</div>
      <div>Your max limit is: {searchParams.maxLimit}</div>
      <div>Property that you are interested in:</div>
      <div>Address: {property.address}</div>
      <div>Rent: {property.rent}</div>
    </div>
  );
};

export default PropertyPage;
