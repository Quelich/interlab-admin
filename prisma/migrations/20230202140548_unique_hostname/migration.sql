/*
  Warnings:

  - A unique constraint covering the columns `[hostname]` on the table `CPU_Records` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CPU_Records_hostname_key" ON "CPU_Records"("hostname");
