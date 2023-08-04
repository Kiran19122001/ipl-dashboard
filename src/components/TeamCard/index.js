import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamsDetails} = this.props
    const {name, id, teamImageUrl} = teamsDetails
    return (
      <div>
        <Link to={`team/${id}`}>
          <li className="item-list">
            <img src={teamImageUrl} alt="" className="logo-image" />
            <p className="name">{name}</p>
          </li>
        </Link>
      </div>
    )
  }
}

export default TeamCard
