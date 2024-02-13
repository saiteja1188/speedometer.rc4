// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerateApplyButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => {
        return {speed: prevState.speed + 10}
      })
    }
  }

  onApplyBrakeButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => {
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="Speed-App-Container">
        <div className="Speedometer-Container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            alt="Speedometer"
          />
          <h1 className="speed-heading">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              type="button"
              className="button accelerate-button"
              onClick={this.onAccelerateApplyButton}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="button break-button"
              onClick={this.onApplyBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
