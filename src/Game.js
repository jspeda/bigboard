import React, { Component } from 'react';
import './Game.css'

class Game extends Component {
  render() {
    const gameData = this.props.details;
    return (
      <div className="game">
        <div className="main-container">
          <div className="teams">
            <div className="spacing-div"></div>
            <div className="away-name">{gameData.away_file_code}</div>
            <div className="home-name">{gameData.home_file_code}</div>
          </div>
          <div className="runs">
            <div className="runs-header">r</div>
            <div className="away-runs">{gameData.away_team_runs}</div>
            <div className="home-runs">{gameData.home_team_runs}</div>
          </div>
          <div className="hits">
            <div className="hits-header">h</div>
            <div className="away-hits">{gameData.away_team_hits}</div>
            <div className="home-hits">{gameData.home_team_hits}</div>
          </div>
          <div className="errors">
            <div className="errors-header">e</div>
            <div className="away-errors">{gameData.away_team_errors}</div>
            <div className="home-errors">{gameData.home_team_errors}</div>
          </div>
          <div className="inning">
            <div className="inning-number">
              {
                // might need to change this to deal with final
                gameData.inning != undefined && gameData.status != 'Final' ?
                  (gameData.top_inning === "Y" ? `${String.fromCharCode(8593)} ${gameData.inning}` : `${String.fromCharCode(8595)} ${gameData.inning}`) :
                  null
              }
            </div>
          </div>
        </div>
        <div className="status">
          {
            gameData.status != "In Progress" && gameData.status != "Manager Challenge" ? `${gameData.status}` : ``
          }
        </div>
      </div>
    )
  }
}

export default Game;
