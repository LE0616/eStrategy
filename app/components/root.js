import React from 'react'
import {Route, Switch, Match} from 'react-router-dom'

//Components
import CourseCatalog from './CourseCatalog'
import Navbar from './Navbar'
import Courses from './Courses'
import Tests from './Tests'

const Root = () => {
  return (

    <div>
      <header>
        <h1>If you can see me, the root is rendering.</h1>
      </header>
      <main>
        <Switch>
          <Route exact path='/courses' component={(routeProps) => <Courses {...routeProps} />} />

          <Route exact path='/tests' component={(routeProps) => <Tests {...routeProps} />} />

          <Route path='/' component={(routeProps) => <CourseCatalog {...routeProps} />} />

        </Switch>
      </main>
      <footer>
        <h3>by Lauren (LE) McNamara</h3>
      </footer>
    </div>
  )
}

export default Root
