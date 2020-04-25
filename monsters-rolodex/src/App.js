import React, { Component } from 'react';

import { CardList } from './Components/Card-List/CardList';

import { SearchBox } from './Components/Search-Box/SearchBox';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }

}

export default App;
