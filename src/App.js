import React, { Component } from 'react';
import "reset.css"
import "./css/App.css"

import GearDetails from "./components/GearDetails"
import ContestDetails from "./components/ContestDetails"
import BeachDetails from "./components/BeachDetails"
import ReviewDetails from "./components/ReviewDetails"

class App extends Component {
  state = {
    active2: false,
    activeTabIndex: -1,
    navItemFollowerStyles: {},
  }

  render() {
    const { navItemFollowerStyles } = this.state

    return (
      <div>
        <nav>
          <ul>
            <li
              className={ this._getListItemClassName(0) }
              onMouseOver={ this._createEnterHandler(0) }
              onMouseOut={ this._handleLeave }  
            >
              <p>Gear</p>
              <GearDetails />
            </li>
            <li
              className={ this._getListItemClassName(1) }
              onMouseOver={ this._createEnterHandler(1) }
              onMouseOut={ this._handleLeave }  
            >
              <p>Contests</p>
              <ContestDetails />
            </li>
            <li
              className={ this._getListItemClassName(2) }
              onMouseOver={ this._createEnterHandler(2) }
              onMouseOut={ this._handleLeave }  
            >
              <p>Beaches</p>
              <BeachDetails />
            </li>
            <li
              className={ this._getListItemClassName(3) }
              onMouseOver={ this._createEnterHandler(3) }
              onMouseOut={ this._handleLeave }  
            >
              <p>Reviews</p>
              <ReviewDetails />
            </li>
          </ul>

          <div className={ this._getNavFollowerClassName() } style={ navItemFollowerStyles } />
          
        </nav>

        <header>
          <img className="hero-img" src="/hero.jpg" alt="hero image"/>
          <h1>Ride the Wave</h1>
        </header>
      </div>
    );
  }

  _createEnterHandler = (index) => ({ currentTarget }) => {
    let details = currentTarget.querySelector(".details")
    
    //1) Set the active tab, giving it a class of active.
    //2) The active tab's details should now have a display of block instead of hidden.
    //   We can now position the nav follower to the position of the details.
    //3) Add another class to the active tab which will fade in the details content.
    this.setState({ 
      activeTabIndex: index,
    }, () => {
      const { top, left, width, height } = details.getBoundingClientRect()
      this.setState({
        navItemFollowerStyles: { top, left, width, height }    
      }, () => {
        this.setState({ active2: true })
      })
    })

  }

  _handleLeave = ({ currentTarget }) => {
    this.setState({ activeTabIndex: -1, active2: false })
  }

  _getListItemClassName = (index) => {
    const { activeTabIndex, active2 } = this.state
    let className = ""

    if (activeTabIndex === index) {
      className += "active"
    }

    if (active2) {
      className += " active-2"
    }

    return className
  }

  _getNavFollowerClassName = () => {
    const { activeTabIndex } = this.state
    const isHoveringTab = activeTabIndex !== -1 
    let className = "nav-follower"

    if (isHoveringTab) {
      className += " active"
    }

    return className
  }
}

export default App;
