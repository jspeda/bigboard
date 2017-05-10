import React, { Component } from 'react';
import './Game.css'

class Game extends Component {

  inningStatus(gameData) {
    if (gameData.inning !== undefined && gameData.status !== 'Final') {
      return(
        <span>
          {
            gameData.top_inning === "Y" ? `${String.fromCharCode(8593)} ${gameData.inning}` : `${String.fromCharCode(8595)} ${gameData.inning}`
          }
        </span>
      )
    }
    else if (gameData.status === "Final" || gameData.status === "Game Over"){
      return(
        <span>
          {
            `f/${gameData.inning}`
          }
        </span>
      );
    }
  }
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
            <div className="away-runs">{gameData.away_team_runs || `0`}</div>
            <div className="home-runs">{gameData.home_team_runs || `0`}</div>
          </div>
          <div className="hits">
            <div className="hits-header">h</div>
            <div className="away-hits">{gameData.away_team_hits || `0`}</div>
            <div className="home-hits">{gameData.home_team_hits || `0`}</div>
          </div>
          <div className="errors">
            <div className="errors-header">e</div>
            <div className="away-errors">{gameData.away_team_errors || `0`}</div>
            <div className="home-errors">{gameData.home_team_errors || `0`}</div>
          </div>
          <div className="inning">
            <div className="inning-number">
              {
                this.inningStatus(gameData)
              }
            </div>
          </div>
        </div>
        <div className="status">
          {
            gameData.status !== "In Progress" && gameData.status !== "Manager Challenge" ? `${gameData.status.toLowerCase()}` : `outs: ${gameData.outs} `
          }
        </div>
      </div>
    )
  }
}

export default Game;
