import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import moment from 'moment';

class App extends Component {
  constructor() {
    super();
    this.addGame = this.addGame.bind(this);
    this.state = {
      date: moment().format('MMMM Do, YYYY'),
      games: {}
    }
  }

  componentDidMount() {
    const thisYear = moment().format('YYYY');
    const thisMonth = moment().format('MM');
    const thisDay = moment().format('DD');

    const scoreBoard = fetch(`http://gd2.mlb.com/components/game/mlb/year_${thisYear}/month_${thisMonth}/day_${thisDay}/miniscoreboard.json`);
    scoreBoard
      .then(data => data.json())
      .then(data => {
        console.log(data.data.games.game)
        data.data.games.game.map(game => {
          this.addGame(game);
          console.log(
          `${game.away_team_city}: ${game.away_team_runs} vs ${game.home_team_city}: ${game.home_team_runs} status: ${game.status}`
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
        <div className="todays-scores">Today's Scores</div>
        <div className="date">{this.state.date}</div>
        <div className="scoreboard">
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
      </div>
    );
  }
}

export default App;
