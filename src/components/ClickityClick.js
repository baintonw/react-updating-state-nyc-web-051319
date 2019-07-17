// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
  constructor(){
    super();

    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
      addressInfo: {

      }
    }
  };

  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked)) // prints true

  }

  render(){
    return(
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'}
          been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
    console.log(this.state)
  }
}

export default ClickityClick;
