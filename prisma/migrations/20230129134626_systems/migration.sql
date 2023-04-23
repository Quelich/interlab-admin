/*
  Warnings:

  - You are about to drop the column `name` on the `Systems` table. All the data in the column will be lost.
  - Added the required column `arch` to the `Systems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostname` to the `Systems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform` to the `Systems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Systems" DROP COLUMN "name",
ADD COLUMN     "arch" TEXT NOT NULL,
ADD COLUMN     "hostname" TEXT NOT NULL,
ADD COLUMN     "platform" TEXT NOT NULL;
