-- CreateTable
CREATE TABLE "CPU_Records" (
    "id" SERIAL NOT NULL,
    "hostname" TEXT NOT NULL,
    "metrics" INTEGER[],
    "dates" TEXT[],

    CONSTRAINT "CPU_Records_pkey" PRIMARY KEY ("id")
);
