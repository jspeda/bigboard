import React, { Component } from 'react';
import './Game.css'

class Game extends Component {
  render() {
    const gameData = this.props.details;
    return (
      <div className="game">
        <div className="teams">{gameData.away_file_code} vs {gameData.home_file_code}</div>
        <div className="score">{gameData.away_team_runs} - {gameData.home_team_runs}</div>
        {/* only show status if it's "Delayed Start", "Postponed", "Warmup", or "Preview" */}
        <div className="status">{gameData.status}</div>
      </div>
    )
  }
}

export default Game;
