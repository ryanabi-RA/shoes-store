// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";

type ResponseData = {
  message: string;
  result: any;
};

type Data = {
  products: string[];
  total: number;
  skip: number;
  limit: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") return res.status(405).end();

  const x = await fetch("https://dummyjson.com/products/");
  const result: Data = await x.json();

  if (!result) return res.status(404).end();

  res.status(200).json({ message: "ok", result });
}
