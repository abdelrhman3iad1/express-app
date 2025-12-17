import { validationResult } from 'express-validator';
import Course from '../models/courses.model.js';
import ApiResponse from '../utils/api_response.js';

export const getAllCourses = async (req, res) => {
    const limit = req.query.per_page || 1;
    const page = req.query.page || 1;
    const skip = (page - 1) * limit;

    const courses = await Course.find({}, { "__v": false }).limit(limit).skip(skip);
    return ApiResponse(res, 200, "success", "Courses retrieved successfully", courses);
}

export const showCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id, { "__v": false });
        if (!course) {
            return ApiResponse(res, 404, "fail", "Course not found");
        }
        return ApiResponse(res, 200, "success", "Course retrieved successfully", course);
    } catch (e) {
        return ApiResponse(res, 400, "error", "Invalid Object ID");
    }
}

export const createCourse = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) return ApiResponse(res, 422, "fail", "Validation failed", errors.array());

    const newCourse = new Course(req.body);

    await newCourse.save();

    return ApiResponse(res, 201, "success", "Course created successfully", newCourse);
}

export const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.updateOne({ _id: req.params.id }, { $set: req.body });
        return ApiResponse(res, 200, "success", "Course updated successfully", updatedCourse);
    } catch (e) {
        return ApiResponse(res, 400, "error", "Invalid Object ID");
    }
}

export const deleteCourse = async (req, res) => {
    try {
        await Course.deleteOne({ _id: req.params.id });
        const courses = await Course.find();
        return ApiResponse(res, 200, "success", "Course deleted successfully", courses);
    } catch (e) {
        return ApiResponse(res, 400, "error", "Invalid Object ID");
    }
}