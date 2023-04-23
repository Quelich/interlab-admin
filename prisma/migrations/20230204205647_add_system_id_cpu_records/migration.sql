/*
  Warnings:

  - A unique constraint covering the columns `[system_id]` on the table `CPU_Records` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CPU_Records" ADD COLUMN     "system_id" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "CPU_Records_system_id_key" ON "CPU_Records"("system_id");
