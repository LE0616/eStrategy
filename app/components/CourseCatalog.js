import React from 'react'
//



export default class CourseCatalog extends React.Component {

  constructor () {
    super();

    this.state = {
      courses: [{"id":1,"name":"Agile 101","description":"Agile Development is a set of methods and practices where solutions evolve through collaboration between self-organizing, cross-functional teams. Agile 101 provides a detailed introduction.","domain":"https://www.agilealliance.org/agile101/", "tests":[{"id":1,"courseId":1,"name":"The Agile Manifesto","num_of_questions":20,"duration":"20"}, {"id":2,"courseId":1,"name":"12 Principles","num_of_questions":24,"duration":"20"},{"id":3,"courseId":1,"name":"Key Concepts","num_of_questions":10,"duration":"10"}]},{"id":2,"name":"Writing Accessible Code","description":"People with disabilities often use assistive technologies and/or adaptive strategies to browse and interact with web sites and applications. Following global accessibility coding standards allows web professionals to deliver the same information and interaction to people with disabilities as to any other user. This is design that is “accessible” to all. When inclusive design practices are not followed, many people have difficulty or are unable to access the content and function of web sites. These are “inaccessible” experiences.","domain":"https://air-rallies.org/why-accessibility/","tests":[{"id":4,"courseId":2,"name":"W3C WAI","num_of_questions":50,"duration":"60"},{"id":5,"courseId":2,"name":"Why Make It Accessible","num_of_questions":20,"duration":"20"}]}],

      tests:[{"id":1,"courseId":1,"name":"The Agile Manifesto","num_of_questions":20,"duration":"20"}, {"id":2,"courseId":1,"name":"12 Principles","num_of_questions":24,"duration":"20"},{"id":3,"courseId":1,"name":"Key Concepts","num_of_questions":10,"duration":"10"}, {"id":4,"courseId":2,"name":"W3C WAI","num_of_questions":50,"duration":"60"},{"id":5,"courseId":2,"name":"Why Make It Accessible","num_of_questions":20,"duration":"20"}]
    }
  }

  render () {
    const courses = this.state.courses;
    const tests = this.state.tests;

    return (
      <div>
        <h1>Course Catalog</h1>
        <div className="page_description">The Course Catalog is published before advising and registration begin for each semester and summer session. It lists each class being offered, its description, the domain at which it can be accessed, test topics for the term, and its unique number—which students must know in order to register.</div>
        <br></br>

        {/* transfer to Courses component with courses on props */}
        <div className="courses_grid">
          {
            courses.map(course =>

              <div key={course.id} id="individual_course">
                <br></br>
                <div id="course_id">{`${course.id}`}</div>
                <div id="course_name">{`${course.name}`}</div>
                <div id="course_domain">{`${course.domain}`}</div>
                <div id="course_description">{`${course.description}`}</div>
                <div id="course_tests_grid">
                  {/* transfer to Tests component courses on props */}
                  {
                    tests.map(test =>
                      <div id="individual_test">
                        <br></br>
                        <div id="test_id">{`${test.id}`}</div>
                        <div id="test_name">{`${test.name}`}</div>
                        <div id="test_q_num">{`${test.num_of_questions}`}</div>
                        <div id="test_duration">{`${test.duration}`}</div>
                      </div>
                    )
                  }

                </div>
              </div>
            )

          }

        </div>
      </div>
    )
  }

}
