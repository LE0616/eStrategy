const router = require('express').Router()
const { Course, Test} = require('../db/index')

// Courses Routes

// GET /api/courses - TESTED
router.get('/', async (req, res, next) => {
  try {
    const courses = await Course.findAll({include: [{model: Test}]});
    res.json(courses);
  } catch (err) {
    next(err);
  }
});

// GET /api/courses/:courseId - TESTED
router.get('/:courseId', async (req, res, next) => {
  try {
    const course = await Course.findOne({
      where: {id: req.params.courseId},
      include: [{model: Test}]
    });
    res.json(course);
  } catch (err) {
    next(err);
  }
});

//GET /api/courses/name/:courseName
router.get('/name/:courseName', async (req, res, next) => {
  try {
    const course = await Course.findOne({
      where: {name: req.params.courseName},
      include: [{model: Test}]
    });
    res.json(course);
  } catch (err) {
    next(err);
  }
});

//POST /api/campuses
router.post('/', async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (err) {
    next(err)
  }
})

//DELETE /api/courses/:courseId
//Includes associated tests
router.delete('/:courseId', async (req, res, next) => {
  try {
    await Course.destroy({
      where: {id: req.parama.courseId},
      include: [{model: Test}]
    })
  } catch (err) {
    next(err);
  }
})

//UPDATE /api/courses/:courseId
router.put('/:courseId', async (req, res, next)=> {
  try {
    const toUpdate = await Course.findOne({
      where: {id: req.params.courseId}
    });
    await toUpdate.update(req.body);
    res.status(204).send('Course updated')
  } catch (err) {
    next(err);
  }
})

module.exports = router;
