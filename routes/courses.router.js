import express from 'express';
const router = express.Router();
import * as courseController from '../controllers/courses.controller.js';
import { createCourseValidaions } from '../middlewares/validations/courses.js';


router.route('/')
        .get(courseController.getAllCourses)
        .post(createCourseValidaions(), courseController.createCourse)
router.route('/:id')
        .get(courseController.showCourse)
        .put(courseController.updateCourse)
        .delete(courseController.deleteCourse)

export default router;