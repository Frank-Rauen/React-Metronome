import React, {Component} from 'react';
import './App.css';

import Metronome from '../src/Metronome'

class App extends Component {
  render() {
    return(
      <div className='metronome'>
        <Metronome />
      </div>
    )
  }
}

export default App;
