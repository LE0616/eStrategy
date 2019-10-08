const router = require('express').Router()
const { Course, Test} = require('../db/index')

// Tests Routes

//GET /api/tests - TESTED
router.get('/', async (req, res, next) => {
  try {
    const tests = await Test.findAll({include: [{model: Course}]});
    res.json(tests);
  } catch (err) {
    next(err);
  }
});

// GET /api/tests/:testId - TESTED
router.get('/:testId', async (req, res, next) => {
  try {
    const test = await Test.findOne({where: {id: req.params.testId},
     include: [{model: Course}]
    });
    res.json(test);
  } catch (err) {
    next(err);
  }
});

//GET /api/tests/name/:testName
router.get('/name/:testName', async (req, res, next) => {
  try {
    const test = await Test.findOne({
      where: {name: req.params.testName},
      include: [{model: Course}]
    });
    res.json(test);
  } catch (err) {
    next(err);
  }
});

//POST /api/tests
router.post('/', async (req, res, next) => {
  try {
    const test = await Test.create(req.body);
    res.json(test);
  } catch (err) {
    next(err)
  }
})

//DELETE /api/tests/:testId
router.delete('/:testId', async (req, res, next) => {
  try {
    await Test.destroy({
      where: {id: req.parama.testId}
    })
  } catch (err) {
    next(err);
  }
})

//UPDATE /api/tests/:testId
router.put('/:testId', async (req, res, next)=> {
  try {
    const toUpdate = await Test.findOne({
      where: {id: req.params.testId}
    });
    await toUpdate.update(req.body);
    res.status(204).send('Test updated')
  } catch (err) {
    next(err);
  }
})


module.exports = router;
