import React from "react";
import "./styles.css";

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
                <div className="content">
                        <div className="input-group">
                            <label htmlFor="resin">Resin needed:</label>
                            
                            <input
                                id="resin"
                                type="number"
                                value={resin}
                                onChange={(e) => { this.setState({ resin: e.target.value }) }}
                            />
                        </div>

                        <div className="result">{this.getTotalHours()}</div>
                </div>
            </div>
        );
    }
}

export default Main;
