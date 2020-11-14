import React from "react";
import "./styles.css";

import paimon from './../../assets/paimon.png';

class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            resin: '',
        };
    }

    getTotalHours() {
        const { resin } = this.state;

        const hours = ((resin * 8) / 60);
        const roundedHours = Math.floor(hours);
        
        const minutes = (hours - roundedHours) * 60;
        const roundedMinutes = Math.round(minutes);
        
        return `${roundedHours} hour(s) and ${roundedMinutes} minute(s).`;
    }

    render() {
        const { resin } = this.state;

        return (
            <div className="container">
                <div className="image">
                    <img src={paimon} alt="`Paimon" />
                </div>
                
                <div className="content">
                        <div className="input-group">
                            <label htmlFor="resin">Let Paimon help you!</label>
                            
                            <input
                                id="resin"
                                type="number"
                                placeholder="How much resin you need?"
                                value={resin}
                                onChange={(e) => { this.setState({ resin: e.target.value }) }}
                            />
                        </div>

                        <div className="result">It will take: {this.getTotalHours()}</div>
                </div>
            </div>
        );
    }
}

export default Main;
