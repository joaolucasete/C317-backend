/*
  Warnings:

  - Added the required column `addressComplement` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressNumber` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ServiceProvider" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "addressNumber" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "addressComplement" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "ServiceProvider_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ServiceProvider" ("authorId", "cpf", "id") SELECT "authorId", "cpf", "id" FROM "ServiceProvider";
DROP TABLE "ServiceProvider";
ALTER TABLE "new_ServiceProvider" RENAME TO "ServiceProvider";
CREATE UNIQUE INDEX "ServiceProvider_cpf_key" ON "ServiceProvider"("cpf");
CREATE UNIQUE INDEX "ServiceProvider_authorId_key" ON "ServiceProvider"("authorId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
