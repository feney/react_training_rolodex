import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '12e1231e'
        },
        {
          name: 'Frank',
          id: '12e1231f'
        },
        {
          name: 'Jacky',
          id: '12e1231g'
        },
        {
          name: 'Andrei',
          id: '12e1231h'

        }
      ]

    };
  }



  render() {
    return <div className='App'>
      {
        this.state.monsters.map((monster) => {
          return <div key={monster.name}><h1>{monster.name}</h1></div>
        })
      }

    </ div >

  }
}

export default App;
