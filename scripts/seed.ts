const { db } = require("@vercel/postgres");
const propertiesList = require("../app/MOCK_DATA.json");

async function seedProperties(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "properties" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS properties (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        rent INT NOT NULL,
        address TEXT NOT NULL
      );
    `;

    console.log(`Created "properties" table`);

    // Insert data into the "properties" table
    const insertedProperties = await Promise.all(
      propertiesList.map(async (property) => {
        return client.sql`
        INSERT INTO properties (rent, address)
        VALUES (${Math.floor(property.rent)}, ${property.address})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedProperties.length} properties`);

    return {
      createTable,
      properties: insertedProperties,
    };
  } catch (error) {
    console.error("Error seeding properties:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProperties(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
