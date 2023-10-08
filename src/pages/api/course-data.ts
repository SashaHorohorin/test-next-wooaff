// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import course_data from "../../data/course-data";
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(course_data)
}
