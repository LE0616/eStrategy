const router = require('express').Router()
const { Course, Test} = require('../db/index')

// Courses Routes

// GET /api/courses
router.get('/', async (req, res, next) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (err) {
    next(err);
  }
});

// GET /api/courses/:courseId
router.get('/:courseId', async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId, {
      include: [{model: Test}]
    });
    res.json(course);
  } catch (err) {
    next(err);
  }
});



module.exports = router;
