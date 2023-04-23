import { prisma } from "@/database/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const customerData = JSON.parse(req.body);
  const savedCustomer = await prisma.systems.create({
    data: customerData,
  });
  res.json({ savedCustomer });
};
