import { sql } from "@vercel/postgres";
import { Property } from "./definitions";
import { randomBytes } from "crypto";

export async function fetchProperties() {
  try {
    const data = await sql<Property>`SELECT * FROM properties`;
    const properties = data.rows.map((property) => ({
      ...property,
      userId: randomBytes(50).toString(),
      portalId: "nice-listing-site",
    }));
    return properties;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch properties data.");
  }
}

export async function fetchPropertyById(id: string) {
  try {
    const data = await sql<Property>`
      SELECT
        properties.id,
        properties.rent,
        properties.address
      FROM properties
      WHERE properties.id = ${id};
    `;

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch property.");
  }
}
