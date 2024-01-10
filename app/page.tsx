import { redirect } from "next/navigation";
import { SimpleMode } from "./SimpleMode";
import { fetchProperties } from "./lib/data";

type Props = {
  params: {
    stars: string;
    maxLimit: string;
    userId: string;
    propertyId: string;
  };
};

export default async function Home({
  params: { maxLimit, propertyId, stars, userId },
}: Props) {
  if (propertyId) {
    redirect(
      `/${propertyId}?stars=${stars}&maxLimit=${maxLimit}&userId=${userId}`
    );
  }
  const properties = await fetchProperties();
  return <SimpleMode properties={properties} />;
}
