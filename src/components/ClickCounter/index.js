// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(preState => {
      return {count: preState + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been Clicked <span className="counter">{count}</span>
          times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <button className="button" onClick="onIncrement">
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
