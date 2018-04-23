import React, { Component } from 'react';
import "reset.css"
import "./css/App.css"

import GearDetails from "./components/GearDetails"
import ContestDetails from "./components/ContestDetails"
import BeachDetails from "./components/BeachDetails"
import ReviewDetails from "./components/ReviewDetails"

class App extends Component {
  state = {
    other: false,
    activeIndex: -1,
    isActive: false,
    center: -1
  }

  render() {
    const { center, isActive, activeIndex, other } = this.state

    const DetailsComponent = this._detailsFactory(activeIndex)
    const detailsStyle = { left: center }
    const detailsClass = `details ${ isActive && "active" } ${ other && "active-2" }`

    if (isActive && !other) {
      setTimeout(() => this.setState({ other: true }))
    }

    return (
      <div>
        <nav>
          <ul>
            <li onMouseOver={ this._handleListItemHover(0) }>Gear</li>
            <li onMouseOver={ this._handleListItemHover(1) }>Contests</li>
            <li onMouseOver={ this._handleListItemHover(2) }>Beaches</li>
            <li onMouseOver={ this._handleListItemHover(3) }>Reviews</li>
          </ul>

          <div 
            className={ detailsClass } 
            style={ detailsStyle }
          >
            < DetailsComponent />
          </div>
        </nav>

        <header>
          <img className="hero-img" src="/hero.jpg" alt="hero image"/>
          <h1>Ride the Wave</h1>
        </header>
      </div>
    );
  }

  _handleListItemHover = (index) => ({ target }) => {
    console.log("ay", this.state)
    const center = this._getCenterOfElement(target)
    this.setState({ isActive: true, activeIndex: index, center })
  }

  _getCenterOfElement = (target) => {
    const position = target.getBoundingClientRect()

    const center = position.left + (position.width / 2)

    return center
  }

  _detailsFactory = (index) => {
    console.log("AYYY")
    switch (index) {
      case 0:
        return GearDetails
      case 1:
        return ContestDetails
      case 2:
        return BeachDetails
      case 3:
        return ReviewDetails
      default: 
        return GearDetails
    }
  }
}

export default App;
