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
    "addressComplement" TEXT,
    "city" TEXT NOT NULL,
    "authorId" INTEGER,
    CONSTRAINT "ServiceProvider_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ServiceProvider" ("addressComplement", "addressNumber", "authorId", "city", "country", "cpf", "district", "id", "name", "street", "zipCode") SELECT "addressComplement", "addressNumber", "authorId", "city", "country", "cpf", "district", "id", "name", "street", "zipCode" FROM "ServiceProvider";
DROP TABLE "ServiceProvider";
ALTER TABLE "new_ServiceProvider" RENAME TO "ServiceProvider";
CREATE UNIQUE INDEX "ServiceProvider_cpf_key" ON "ServiceProvider"("cpf");
CREATE UNIQUE INDEX "ServiceProvider_authorId_key" ON "ServiceProvider"("authorId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
