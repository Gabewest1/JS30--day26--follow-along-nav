import React, { Component } from 'react';
import "reset.css"
import "./css/App.css"

import GearDetails from "./components/GearDetails"
import ContestDetails from "./components/ContestDetails"
import BeachDetails from "./components/BeachDetails"
import ReviewDetails from "./components/ReviewDetails"

class App extends Component {
  state = {
    fadeInDetails: false,
    activeIndex: -1,
    isHoveringListItem: false,
    isHoveringDetails: false,
    center: -1
  }

  render() {
    const { center, isHoveringListItem, isHoveringDetails, activeIndex, fadeInDetails } = this.state
    const showDetails = isHoveringListItem || isHoveringDetails

    const DetailsComponent = this._detailsFactory(activeIndex)
    const detailsStyle = { left: center }
    const detailsClass = `
      details 
      ${ showDetails && "active" } 
      ${ fadeInDetails && "active-2" }
    `
    console.log(detailsClass)
    if (showDetails && !fadeInDetails) {
      setTimeout(() => this.setState({ fadeInDetails: true }), 100)
    } else if (!showDetails && fadeInDetails) {
      setTimeout(() => this.setState({ fadeInDetails: false }), 100)      
    }

    return (
      <div>
        <nav>
          <ul>
            <li
              onMouseOver={ this._handleListItemHover(0) }
              onMouseOut={ () => this.setState({ isHoveringListItem: false } )}  
            >Gear</li>
            <li
              onMouseOver={ this._handleListItemHover(1) }
              onMouseOut={ () => this.setState({ isHoveringListItem: false } )}  
            >Contests</li>
            <li
              onMouseOver={ this._handleListItemHover(2) }
              onMouseOut={ () => this.setState({ isHoveringListItem: false } )}  
            >Beaches</li>
            <li
              onMouseOver={ this._handleListItemHover(3) }
              onMouseOut={ () => this.setState({ isHoveringListItem: false } )}  
            >Reviews</li>
          </ul>

          <div
            className={ detailsClass } 
            style={ detailsStyle }
            onMouseOver={ () => this.setState({ isHoveringDetails: true }) }
            onMouseOut={ () => this.setState({ isHoveringDetails: false }) }
          >
            <DetailsComponent />
          </div>
        </nav>

        <header>
          <img className="hero-img" src="/hero.jpg" alt="hero image"/>
          <h1>Ride the Wave</h1>
        </header>
      </div>
    );
  }
  // componentDidUpdate = (prevProps, prevState) => {
  //   const { center, isHoveringListItem, isHoveringDetails, activeIndex, fadeInDetails } = this.state
  //   const showDetails = isHoveringListItem || isHoveringDetails

  //   let fadeInDetails

  //   //Ned to
  //   if (showDetails && !fadeInDetails) {
  //     setTimeout(() => this.setState({ fadeInDetails: true }))
  //   }
  // }
  _handleListItemHover = (index) => ({ target }) => {
    const center = this._getCenterOfElement(target)
    this.setState({ isHoveringListItem: true, activeIndex: index, center })
  }

  _getCenterOfElement = (target) => {
    const position = target.getBoundingClientRect()

    const center = position.left + (position.width / 2)

    return center
  }

  _detailsFactory = (index) => {
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
