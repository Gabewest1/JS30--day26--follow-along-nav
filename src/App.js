import React, { Component } from 'react';
import "reset.css"
import "./css/App.css"

class App extends Component {
  state = {
    center: -1,
    isActive: false
  }

  render() {
    const DetailsComponent = (<p>Hello World!</p>)
    const detailsStyle = {
      left: this.state.center,
      opacity: this.state.isActive ? 1 : 0
    }

    return (
      <div>
        <nav>
          <ul 
            onMouseOver={ () => this.setState({ isActive: true }) }
            onMouseOut={ () => this.setState({ isActive: false }) }
          >
            <li onMouseOver={ this.getCenterOfElement }>Gear</li>
            <li onMouseOver={ this.getCenterOfElement }>Contests</li>
            <li onMouseOver={ this.getCenterOfElement }>words</li>
            <li onMouseOver={ this.getCenterOfElement }>lit</li>
          </ul>

          <div 
            className="details" 
            style={ detailsStyle }
            onMouseOver={ () => this.setState({ isActive: true }) }
            onMouseOut={ () => this.setState({ isActive: false }) }
          >
            { DetailsComponent }
          </div>
        </nav>

        <header>
          <img className="hero-img" src="/hero.jpg" alt="hero image"/>
          <h1>Ride the Wave</h1>
        </header>
      </div>
    );
  }

  getCenterOfElement = ({ target }) => {
    const position = target.getBoundingClientRect()

    const center = position.left + (position.width / 2)

    this.setState({ center })
  }
}

export default App;
