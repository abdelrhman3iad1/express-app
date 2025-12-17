import { body } from 'express-validator';


export const createCourseValidaions = () => {

    return [
        body('name')
            .notEmpty()
            .withMessage('Name is Required'),
        body('price')
            .notEmpty()
            .withMessage('Price is Required')
            .isLength({ min: 2 })
            .withMessage('Price is Required with minimum 2 digits  '),
    ]
}
