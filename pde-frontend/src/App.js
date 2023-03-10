import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome.js';
import HelloWorld from './pages/HelloWorld.js';
import Reaction from './pages/Reaction.js';
import Login from './pages/Login.js';
import PostTest from './pages/PostTest.js';
import GetTest from './pages/GetTest.js';
import GetToObject from './pages/GetToObject.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload. hai
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            <Welcome name="Myron" />
            <HelloWorld name="Class" />
            <Reaction />
            <Login />
            <PostTest />
            <GetTest />
            <GetToObject />
        </div>
    );
}

export default App;
