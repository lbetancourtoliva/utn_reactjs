import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import Routing from './config/routing';
import './App.css';

function App() {
    return (
        <div className="app container">
            <Router>
                <NavBar/>
                <Routing/>
            </Router>
        </div>
    );
}

export default App;

