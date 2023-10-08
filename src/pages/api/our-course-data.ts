import our_course_data from "../../data/our-course-data";
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const idCourses: string | string[] = req.query.id;
    const course = our_course_data.find((course) => {
        if(Array.isArray(idCourses)) 
            return course.id === parseInt(idCourses[0]) 
        else
            return course.id === parseInt(idCourses)
    })
    res.status(201).json(course)
}