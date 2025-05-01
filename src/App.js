import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className='App-main'>
        <div className="App-main-highlight">
        Zvedaví, kde budeš sedieť?
        </div>
        <div>
        Zasadací poriadok bude dostupný <span className="App-main-date">16. 10. 2025</span> – deň pred našou svadbou.
        </div>
        <p>
        Nezabudni sa sem vrátiť, aby si zistil, pri kom budeš stolovať a kde ťa čaká tvoje miesto pri stole.
        </p>
      </main>
    </div>
  );
}

export default App;
