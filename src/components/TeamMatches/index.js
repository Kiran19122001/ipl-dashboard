import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {resultTeam: '', isLoading: true}

  async componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const result = await this.getTeamDetails(id)
    this.setState({resultTeam: result, isLoading: false})
  }

  getTeamDetails = async id => {
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    const {latestMatchDetails} = updatedData

    return updatedData
  }

  render() {
    const {resultTeam, isLoading} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = resultTeam
    return (
      <div className="team-inside-view">
        <div>
          <div className="banner-cont">
            {isLoading ? (
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={50}
                width={50}
                className="loader"
              />
            ) : (
              <img src={teamBannerUrl} alt="cross" className="banner" />
            )}
          </div>
          {isLoading ? '' : <p className="latest-match">Latest Matches</p>}
          <LatestMatch
            matchDetails={latestMatchDetails}
            recentMatchDetails={recentMatches}
          />
        </div>
      </div>
    )
  }
}

export default TeamMatches
