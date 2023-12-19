import { randomBytes } from "crypto";
import propertiesList from "./MOCK_DATA.json";

export type Property = {
  rent: string;
  propertyId: string;
  userId: string;
  portalId: string;
  address: string;
};

export const properties: Property[] = propertiesList.map((prop) => ({
  ...prop,
  userId: randomBytes(50).toString(),
}));
