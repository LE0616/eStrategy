import React from 'react'
import {Route, Switch} from 'react-router-dom'

//Components
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
          <Route exact path={'/courses'} render={<Courses />} />

          <Route exact path={'/'} render={<Courses />} />

        </Switch>
      </main>
      <footer>
        <h3>by Lauren (LE) McNamara</h3>
      </footer>
    </div>
  )
}

export default Root
