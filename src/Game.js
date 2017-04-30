import React, { Component } from 'react';

class Game extends Component {
  render() {
    const gameData = this.props.details;
    return (
      <div className="game">
        {gameData.home_team_city} vs {gameData.away_team_city}
      </div>
    )
  }
}

export default Game;
