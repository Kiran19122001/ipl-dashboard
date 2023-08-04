import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {card} = this.props
    const updatedCard = {
      competingTeam: card.competing_team,
      competingTeamLogo: card.competing_team_logo,
      date: card.date,
      firstInnings: card.first_innings,
      id: card.id,
      manOfTheMatch: card.man_of_the_match,
      matchStatus: card.match_status,
      result: card.result,
      secondInnings: card.second_innings,
      umpires: card.umpires,
      venue: card.venue,
    }
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
    } = updatedCard
    const isWon = matchStatus === 'Won' ? 'green' : 'red'

    return (
      <div className="list-div">
        <li className="list-matches">
          <img src={competingTeamLogo} alt="cross" className="thubmNail" />
          <p className="head-big-comp">{competingTeam}</p>
          <p className="status">{result}</p>
          <p className={`match-status ${isWon}`}>{matchStatus}</p>
        </li>
      </div>
    )
  }
}

export default MatchCard
