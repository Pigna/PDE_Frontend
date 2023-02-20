import { useState } from 'react';
function Reaction(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = new FormData(event.target)
        console.log(data);
        data.forEach(element => console.log(element));
        console.log(data.get('name'));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Location:
                <input
                    type="text"
                    name="location"
                    value={inputs.location || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Username:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Password:
                <input
                    type="text"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Database name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Connect"/>
        </form>
    )
}
export default Reaction;