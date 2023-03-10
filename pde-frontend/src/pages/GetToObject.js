import React from 'react';
import WeatherCard from './WeatherCard.js';

class GetTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Objects: []
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('http://localhost:5287/WeatherForecast')
            .then(response => response.json())
            .then(data => this.setState({ Objects: data }))
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request to Objects</h5>
                <div className="card-body">
                    {this.state.Objects.map((item => <WeatherCard date={item.date} temperatureC={item.temperatureC} temperatureF={item.temperatureF} summary={item.summary} />))}
                </div>
            </div>
        )
    }
}

export default GetTest; 