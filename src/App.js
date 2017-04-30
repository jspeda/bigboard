import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentWillMount() {

    const scoreBoard = fetch('http://gd2.mlb.com/components/game/mlb/year_2017/month_04/day_26/miniscoreboard.json');
    scoreBoard
      .then(data => data.json())
      .then(data => {
        console.log(data.data.games.game)
        data.data.games.game.map(game => console.log(
          `${game.away_team_city}: ${game.away_team_runs} vs ${game.home_team_city}: ${game.home_team_runs} status: ${game.status}`
          // I also would want to grab: the link to the game, outs, inning, bottom or top, runs hits errors
        ))
      })

}


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
