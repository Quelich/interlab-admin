/*
  Warnings:

  - A unique constraint covering the columns `[hostname]` on the table `Systems` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Systems_hostname_key" ON "Systems"("hostname");
