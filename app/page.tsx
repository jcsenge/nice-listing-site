import { redirect } from "next/navigation";
import { SimpleMode } from "./SimpleMode";
import { fetchProperties } from "./lib/data";

type Props = {
  searchParams: Record<string, string>;
};

export default async function Home({ searchParams }: Props) {
  if (searchParams.propertyId) {
    redirect(
      `/${searchParams.propertyId}?stars=${searchParams.stars}&maxLimit=${searchParams.maxLimit}&userId=${searchParams.userId}`
    );
  }
  const properties = await fetchProperties();
  return <SimpleMode properties={properties} />;
}
