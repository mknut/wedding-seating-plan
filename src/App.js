import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className='App-main'>
        <b>
        Zvedaví, kde budete sedieť?
        </b>
        <div>
        Zasadací poriadok bude dostupný <b className="App-main-date">16. 10. 2025</b> – deň pred našou svadbou.
        </div>
        <p>
        Nezabudnite sa sem vrátiť, aby ste zistili, pri kom budete stolovať a kde vás čaká vaše miesto pri stole.
        </p>
      </main>
    </div>
  );
}

export default App;
