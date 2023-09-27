import logo from './logo.svg';
import './App.css';

function formatName(userObject) {
    return `${userObject.firstName} ${userObject.lastName}`
}

function App() {
    const user = {
        firstName: "Ahmed",
        lastName: "Abdelkarim",
    }
    return (
        <div className="App">
        <h1>Hello {formatName(user)}</h1>
        </div>
    );
}

export default App;
