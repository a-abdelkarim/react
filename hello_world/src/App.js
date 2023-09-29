import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greet';

function App() {
    return (
        <div className="App">
            <Welcome name="Ahmed" age="24" />
            <Greet name="Ibrahim" />
        </div>
    );
}

export default App;
