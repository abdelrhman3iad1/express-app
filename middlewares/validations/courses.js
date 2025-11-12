const { body } = require('express-validator');


const createCourseValidaions = () => {

    return [
        body('title')
            .notEmpty()
            .withMessage('Title is Required'),
        body('price')
            .notEmpty()
            .withMessage('Price is Required')
            .isLength({min:2})
            .withMessage('Price is Required with minimum 2 digits  '),
    ]
}

module.exports = {createCourseValidaions};