import {Component} from 'react'
import MatchCard from '../MatchCard'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {matchDetails, recentMatchDetails} = this.props
    // console.log(recentMatchDetails)
    // console.log(matchDetails)
    let updatMatchDetails = {
      competingTeam: '',
      competingTeamLogo: '',
      date: '',
      firstInnings: '',
      id: '',
      manOfTheMatch: '',
      matchStatus: '',
      result: '',
      secondInnings: '',
      umpires: '',
      venue: '',
    }

    if (matchDetails !== undefined) {
      updatMatchDetails = {
        competingTeam: matchDetails.competing_team,
        competingTeamLogo: matchDetails.competing_team_logo,
        date: matchDetails.date,
        firstInnings: matchDetails.first_innings,
        id: matchDetails.id,
        manOfTheMatch: matchDetails.man_of_the_match,
        matchStatus: matchDetails.match_status,
        result: matchDetails.result,
        secondInnings: matchDetails.second_innings,
        umpires: matchDetails.umpires,
        venue: matchDetails.venue,
      }
    }
    // let updateRecentMatch = {
    //   competingTeam: '',
    //   competingTeamLogo: '',
    //   date: '',
    //   firstInnings: '',
    //   id: '',
    //   manOfTheMatch: '',
    //   matchStatus: '',
    //   result: '',
    //   secondInnings: '',
    //   umpires: '',
    //   venue: '',
    // }
    // if (recentMatchDetails !== undefined) {
    //   updateRecentMatch = {
    //     competingTeam: recentMatchDetails.competing_team,
    //     competingTeamLogo: recentMatchDetails.competing_team_logo,
    //     date: recentMatchDetails.date,
    //     firstInnings: recentMatchDetails.first_innings,
    //     id: recentMatchDetails.id,
    //     manOfTheMatch: recentMatchDetails.man_of_the_match,
    //     matchStatus: recentMatchDetails.match_status,
    //     result: recentMatchDetails.result,
    //     secondInnings: recentMatchDetails.second_innings,
    //     umpires: recentMatchDetails.umpires,
    //     venue: recentMatchDetails.venue,
    //   }
    // }

    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      id,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = updatMatchDetails

    // const {
    //   competingTeam,
    //   competingTeamLogo,
    //   date,
    //   firstInnings,
    //   id,
    //   manOfTheMatch,
    //   matchStatus,
    //   result,
    //   secondInnings,
    //   umpires,
    //   venue,
    // } = updateRecentMatch

    return (
      <div>
        <div>
          {matchDetails === undefined ? (
            ''
          ) : (
            <div>
              <div className="first-inngs">
                <div className="image-cont">
                  <h1 className="comp-team">{competingTeam}</h1>
                  <img
                    src={competingTeamLogo}
                    alt="cross"
                    className="comp-logo"
                  />
                </div>
                <div className="matter">
                  <p className="date">{date}</p>
                  <p>{venue}</p>
                  <p>{result}</p>
                </div>
              </div>
              <div className="matter-two">
                <p className="biggers">First Innings</p>
                <p className="smallers">{firstInnings}</p>
                <p className="biggers">Second Innings</p>
                <p className="smallers">{secondInnings}</p>
                <p className="biggers">Umpires</p>
                <p className="smallers">{umpires}</p>
              </div>
              <ul className="win-loss">
                {recentMatchDetails.map(each => (
                  <MatchCard card={each} key={each.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default LatestMatch
