import './App.scss';
import Header from './components/Header';
import DateContainer from './components/DateContainer';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <DateContainer />
            </div>
        </div>
    );
}

export default App;
