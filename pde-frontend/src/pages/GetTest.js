import React from 'react';

class GetTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('http://localhost:26645/WeatherForecast')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data[0].date }));
    }

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    Total react packages: {totalReactPackages}
                </div>
            </div>
        );
    }
}

export default GetTest; 