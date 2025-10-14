import "./App.css";
import { TableList } from "./pages/TableList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.PUBLIC_URL}/logo.svg`}
          className="App-logo"
          alt="logo"
        />
      </header>

      <main className="App-main">
        <TableList />
      </main>
    </div>
  );
}

export default App;
