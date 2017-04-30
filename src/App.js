import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {
  constructor() {
    super();
    this.addGame = this.addGame.bind(this);
    this.state = {
      games: {}
    }
  }

  componentWillMount() {

    const scoreBoard = fetch('http://gd2.mlb.com/components/game/mlb/year_2017/month_04/day_26/miniscoreboard.json');
    scoreBoard
      .then(data => data.json())
      .then(data => {
        console.log(data.data.games.game)
        data.data.games.game.map(game => {
          this.addGame(game);
          console.log(
          `${game.away_team_city}: ${game.away_team_runs} vs ${game.home_team_city}: ${game.home_team_runs} status: ${game.status}`
          // I also would want to grab: the link to the game, outs, inning, bottom or top, runs hits errors
        )})
      });
}

addGame(game) {
  const games = {...this.state.games};
  const timeStamp = Date.now();
  games[`game-${timeStamp}`] = game;
  this.setState({games});
}

  render() {
    return (
      <div className="App">
        {
          Object.keys(this.state.games)
            .map(key =>
              <Game
                key={key}
                index={key}
                details={this.state.games[key]}
               />
            )
        }
      </div>
    );
  }
}

export default App;
