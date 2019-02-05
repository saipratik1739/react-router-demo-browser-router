import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeComponent from '../components/home/home-component';
import AboutComponent from '../components/about/about-component';
import TopicsComponent from '../components/topics/topics-component';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomeComponent}/>
      <Route exact path='/home' component={HomeComponent}/>
      <Route exact path='/about' component={AboutComponent}/>
      <Route exact path='/topics' component={TopicsComponent}/>
    </Switch>
  </main>
)

export default Main