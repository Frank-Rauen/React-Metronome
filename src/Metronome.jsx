import React, {Component} from 'react';
import styles from './Metronome.module.css';

class Metronome extends Component {
    constructor(props){
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        }
    }
    handleBpmChange = e => {
        const bpm = e.target.value;
        this.setState({ bpm })
    

    }
    render() {
        const { playing, bpm } = this.state;
    

        return(
        <div className={styles.metronome}>
            <div className={styles.bpmslider}>
                <div>{bpm} BPM</div>
                <input 
                type='range' 
                min='40' 
                max='250' 
                value={bpm}
                onChange={this.handleBpmChange}></input>
            </div>
        <button>{playing ? 'Stop' : 'Start'}</button>
        </div>)
    }
}

export default Metronome; 