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

  componentWillMount() {
    const thisYear = moment().format('YYYY');
    const thisMonth = moment().format('MM');
    const thisDay = moment().format('DD');

    setInterval(() => {
      const scoreBoard = fetch(`http://gd2.mlb.com/components/game/mlb/year_${thisYear}/month_${thisMonth}/day_${thisDay}/miniscoreboard.json`);
      scoreBoard
        .then(data => data.json())
        .then(data => data.data.games.game.map(game => this.addGame(game))
    )}, 1000);
}

addGame(game) {
  const games = {...this.state.games};
  games[game.home_team_city] = game;
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
