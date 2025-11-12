const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courses.controller');
const coursesValidations = require('../middlewares/validations/courses');


router.route('/')
        .get( courseController.getAllCourses)
        .post(coursesValidations.createCourseValidaions(), courseController.createCourse)
router.route('/:id')
        .get(courseController.showCourse)
        .put(courseController.updateCourse)
        .delete(courseController.deleteCourse)

module.exports = router;