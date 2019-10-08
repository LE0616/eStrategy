const { db } = require('./server/db')
const {green, red} = require('chalk')
const Course = require('./server/db/Course')
const Test = require('./server/db/Test')

const courses = [{
  name: 'Agile 101',
  domain: 'https://www.agilealliance.org/agile101/',
  description: 'Agile Development is a set of methods and practices where solutions evolve through collaboration between self-organizing, cross-functional teams. Agile 101 provides a detailed introduction.'
}, {
  name: 'Writing Accessible Code',
  domain: 'https://air-rallies.org/why-accessibility/',
  description: 'People with disabilities often use assistive technologies and/or adaptive strategies to browse and interact with web sites and applications. Following global accessibility coding standards allows web professionals to deliver the same information and interaction to people with disabilities as to any other user. This is design that is “accessible” to all. When inclusive design practices are not followed, many people have difficulty or are unable to access the content and function of web sites. These are “inaccessible” experiences.'
}];

const tests = [{
  course_id: 1,
  name: 'The Agile Manifesto',
  num_of_questions: 20,
  duration: 20.0
}, {
  course_id: 1,
  name: "12 Principles",
  num_of_questions: 24,
  duration: 20.0
}, {
  course_id: 1,
  name: "Key Concepts",
  num_of_questions: 10,
  duration: 10.0
}, {
  course_id: 2,
  name: "W3C/WAI",
  num_of_questions: 50,
  duration: 60.0
}, {
  course_id: 2,
  name: "Why Make It Accessible",
  num_of_questions: 20,
  duration: 20.0
}];

const seed = () =>
  Promise.all(courses.map(course => Course.create(course)))
  .then(() =>
  Promise.all(tests.map(test => Test.create(test)))
  );

const main = () => {
  console.log('Syncing the db...');
  db.sync({force: true})
    .then(() => {
      console.log(green('Seeding the db...'));
    })
    .catch(err => {
      console.error(red('Something went wrong!'))
      console.error(red(err));
    })
    .then(() => {
      db.close();
      return null;
    })
}
