const router = require('express').Router()
const { Course, Test} = require('../db/index')

// Tests Routes

//GET /api/tests
router.get('/', async (req, res, next) => {
  try {
    const tests = await Test.findAll();
    res.json(tests);
  } catch (err) {
    next(err);
  }
});

// GET /api/tests/:testId
router.get('/:testId', async (req, res, next) => {
  try {
    const test = await Test.findById(req.params.testId, {
      include: [{model: Course}]
    });
    res.json(test);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
