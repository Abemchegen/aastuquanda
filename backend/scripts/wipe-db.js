/*
  DANGEROUS: Wipes ALL DATA in the database pointed to by DATABASE_URL.
  Intended for dev/test reset.

  Usage (Windows PowerShell):
    $env:DATABASE_URL="postgresql://..."; npm run db:wipe

  Usage (bash):
    DATABASE_URL='postgresql://...' npm run db:wipe
*/

require("dotenv").config();
const { prisma } = require("../src/db/prisma");

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }

  // Quote table names exactly as Prisma creates them in Postgres.
  // TRUNCATE ... CASCADE clears dependent rows via foreign keys.
  const tables = [
    '"VerificationToken"',
    '"RefreshToken"',
    '"Notification"',
    '"SpaceMembership"',
    '"SavedPost"',
    '"Vote"',
    '"Comment"',
    '"TagOnPost"',
    '"Tag"',
    '"Post"',
    '"Space"',
    '"User"',
  ];

  // One TRUNCATE for speed; order is not critical with CASCADE, but keeping it explicit.
  const sql = `TRUNCATE TABLE ${tables.join(", ")} RESTART IDENTITY CASCADE;`;

  console.log("About to wipe ALL data from:");
  console.log(url.replace(/:\/\/[^@]+@/, "://***:***@"));
  console.log(sql);

  await prisma.$executeRawUnsafe(sql);
  console.log("Wipe complete.");
}

main()
  .catch((err) => {
    console.error("Wipe failed:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
