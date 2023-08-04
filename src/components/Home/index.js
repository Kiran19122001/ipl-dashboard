import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsArray: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/')
    const data = await response.json()
    const updateData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamsArray: updateData, isLoading: false})
  }

  render() {
    const {teamsArray, isLoading} = this.state

    return (
      <div>
        <div className="home-container">
          <div className="heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="logo"
              className="logo"
            />
            <p className="ipl-dash">IPL DashBoard</p>
          </div>
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            <div className="list-container">
              <ul className="teams-list">
                {teamsArray &&
                  teamsArray.map(eachTeam => (
                    <TeamCard teamsDetails={eachTeam} key={eachTeam.id} />
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
