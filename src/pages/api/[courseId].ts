import our_course_data from "@/src/data/our-course-data";

export default function handler(req, res) {
    const idCourses = req.query;
    const course = our_course_data.find((course) => course.id === parseInt(idCourses))
    res.status(201).json(course)
}