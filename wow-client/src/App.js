import React, { Component } from 'react';
import logo from './images/eagledream-logo.png';
import './App.css';
import SearchForm from './search-form';
import CharacterStats from './character-stats';
import PlayerMode from './player-mode';


class App extends Component {
  //TO DO: check for valid API auth token expiration and request if expired.
  //TO DO: request valid client ID and Client Secret
  //TO DO: request valid API auth token using the client ID and Client Secret
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <SearchForm />
          <div className = 'stats-container'>
            <CharacterStats />
            <PlayerMode />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
