import React from 'react';
import Table from '../../models/Table';

class GetTables extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Objects: []
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('http://localhost:5287/Database')
            .then(response => response.json())
            .then(data => this.setState({ Objects: data }))
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Tables from the database:</h5>
                <div className="card-body">
                    {this.state.Objects.map((item => <Table name={item.name} columns={item.columns} />))}
                </div>
            </div>
        )
    }
}

export default GetTables; 