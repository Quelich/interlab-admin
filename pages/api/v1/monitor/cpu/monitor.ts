import { prisma } from "@/database/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma, CPU_Records, Systems } from "@prisma/client";

const os = require("os");
const osUtils = require("os-utils");

// SYSTEM DATA MODEL
interface SystemData {
  platform: string;
  arch: string;
  cpus: string;
  totalmem: number;
  freemem: number;
  loadavg: number;
  uptime: number;
  networkInterfaces: string;
  hostname: string;
}

let cpuUsagePercentages: number[] = [];
let cpuUsageDates: string[] = [];

// Generate data and send it to the API
export default async function cpuHandler(
  req: NextApiRequest,
  res: NextApiResponse<SystemData>
) {
  //TODO: validate & send data to the database
  const cpuMetrics: number[] = await getCpuMetrics();
  const cpuUsageDates: string[] = getCurrentDate();

  res.status(200).json({
    platform: os.platform(),
    arch: os.arch(),
    cpus: os.cpus(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    loadavg: os.loadavg(),
    uptime: os.uptime(),
    networkInterfaces: os.networkInterfaces(),
    hostname: os.hostname(),
  });

  res.end();

  // Saves database on each API call
  await saveCpuMetricsToDatabase(os.hostname(), cpuMetrics, cpuUsageDates);
}

// API function to generate CPU usage data
async function getCpuMetrics(): Promise<number[]> {
  return new Promise((resolve, reject) => {
    osUtils.cpuUsage((v: number) => {
      var percent = v * 100;
      var roundedPercent = Math.round(percent);
      cpuUsagePercentages.push(roundedPercent);
      resolve(cpuUsagePercentages);
    });
  });
}

async function saveCpuMetricsToDatabase(
  hostname: String,
  cpuMetrics: number[],
  cpuRecordDates: string[]
) {
  const cpuRecord = await prisma.CPU_Records.findUnique({
    where: {
      hostname: hostname,
    },
  });

  // If the record exists, update it
  if (cpuRecord) {
    const updatedCpuRecord = await prisma.CPU_Records.update({
      where: {
        hostname: hostname,
      },
      data: {
        metrics: {
          set: cpuMetrics,
        },
        dates: {
          set: cpuRecordDates,
        },
      },
    });
  }
  // If the record doesn't exist, create it
  else {
    const createdCpuRecord = await prisma.CPU_Records.create({
      data: {
        hostname: hostname,
        metrics: [],
        dates: [],
      },
    });
  }
}

/* HELPER FUNCTIONS */
const getCurrentDate = () => {
  const date = new Date();
  cpuUsageDates.push(date.toString());
  return cpuUsageDates;
};
