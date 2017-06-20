import React from 'react'
import {Link} from 'react-router-dom'

import Hall from './Hall'
import Gallery from './Gallery'
import About from './About'
import Contact from './Contact'

class Home extends React.Component {
  render () {
    return (
      <div className="home-background">
        <div className="main-background">
          <div className="home-button-box">
            <h1>Te Whare Piringa</h1>
            <h2>Our Place</h2>
            <p>"Tamaki, the most thriving, engaged, and dynamic community"</p>
            <Link to="/calendar" className="home-book-link"><div className="home-book-button">Book Now</div></Link>
          </div>
        </div>
        <div className="home-content-div">
          <div className="home-route-content">
            <Hall />
            <Gallery />
            <About />
            <Contact />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
