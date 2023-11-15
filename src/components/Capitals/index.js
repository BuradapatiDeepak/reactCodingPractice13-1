import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCountry: countryAndCapitalsList[0]}

  changeCountry = event => {
    const activeId = event.target.value
    const newActiveCountry = countryAndCapitalsList.find(
      item => item.id === activeId,
    )
    this.setState({activeCountry: newActiveCountry})
  }

  render() {
    const {activeCountry} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="inputContainer">
            <select onChange={this.changeCountry} className="dropdown">
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="capital">{activeCountry.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
