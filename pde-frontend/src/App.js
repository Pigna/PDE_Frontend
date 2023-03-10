import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome.js';
import HelloWorld from './pages/HelloWorld.js';
import Reaction from './pages/Reaction.js';
import Login from './pages/Login.js';
import PostTest from './pages/PostTest.js';
import GetTest from './pages/GetTest.js';
import GetToObject from './pages/GetToObject.js';
import GetTables     from './pages/database/GetTables.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <PostTest />
            <GetTest />
            <GetToObject />
            <Welcome name="Myron" />
            <HelloWorld name="Class" />
            <Reaction />
            <Login />
            <GetTables />
        </div>
    );
}
export default App;
