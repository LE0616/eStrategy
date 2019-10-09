import React from 'react'
// import Courses from '/Courses'

export default class CourseCatalog extends React.Component {

  constructor () {
    super();

    this.state = {
      courses: [{"id":1,"name":"Agile 101","description":"Agile Development is a set of methods and practices where solutions evolve through collaboration between self-organizing, cross-functional teams. Agile 101 provides a detailed introduction.","domain":"https://www.agilealliance.org/agile101/", "tests":[{"id":1,"courseId":1,"name":"The Agile Manifesto","num_of_questions":20,"duration":"20"}, {"id":2,"courseId":1,"name":"12 Principles","num_of_questions":24,"duration":"20"},{"id":3,"courseId":1,"name":"Key Concepts","num_of_questions":10,"duration":"10"}]},{"id":2,"name":"Writing Accessible Code","description":"People with disabilities often use assistive technologies and/or adaptive strategies to browse and interact with web sites and applications. Following global accessibility coding standards allows web professionals to deliver the same information and interaction to people with disabilities as to any other user. This is design that is “accessible” to all. When inclusive design practices are not followed, many people have difficulty or are unable to access the content and function of web sites. These are “inaccessible” experiences.","domain":"https://air-rallies.org/why-accessibility/","tests":[{"id":4,"courseId":2,"name":"W3C WAI","num_of_questions":50,"duration":"60"},{"id":5,"courseId":2,"name":"Why Make It Accessible","num_of_questions":20,"duration":"20"}]}]
    }
  }

  render () {

    return (
      <div>
        <h1>Course Catalog</h1>
        <div className="courses">
          <ul>
            <li>{this.state.courses[0].name}</li>
            <li>{this.state.courses[1].name}</li>
          </ul>

        </div>
      </div>
    )
  }

}
