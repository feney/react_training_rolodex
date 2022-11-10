import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Brett', lastName: 'Fene' },
      company: 'Test Co.'
    };
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button onClick={() => {
            this.setState((state, props) => {
              //  first function passed is some function where return an object to then use to shallow merge against state
              return {
                name: {
                  firstName: 'Lydia', lastName: 'Hilton'
                }
              }
            },
              () => {
                console.log(this.state)
              });

            console.log(this.state)
            console.log(this.state.name.firstName)
          }}>Change name</button>
        </header>
      </div >
    );
  }
}

export default App;
