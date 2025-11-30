import { validationResult } from 'express-validator';
import Course from '../models/courses.model.js';

export const getAllCourses = async (req, res) => {
    const courses = await Course.find();
    return res.status(200).json(courses);
}

export const showCourse = async (req, res) => {
    try {

        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ error: "not found" });
        }
        return res.status(200).json(course);
    } catch (e) {
        return res.status(400).json({ msg: "Invalid Object ID" });
    }
}

export const createCourse = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(422).json(errors.array());

    const newCourse = new Course(req.body);

    await newCourse.save();

    return res.status(201).json(newCourse);
}

export const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.updateOne({ _id: req.params.id }, { $set: req.body });
        return res.status(200).json({ msg: "Updated SUccessfully" });
    } catch (e) {
        return res.status(400).json({ msg: e });
    }
}

export const deleteCourse = async (req, res) => {
    try {
        await Course.deleteOne({ _id: req.params.id });
        const courses = await Course.find();
        return res.status(200).json({ success: "true", courses });
    } catch (e) {
        return res.status(400).json({ msg: e });
    }
}