import logo from "./logo.png";
import "./App.css";
import { TableList } from "./pages/TableList";
import { TableMap } from "./pages/TableMap";
import { Placeholder } from "./pages/Placeholder";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("placeholder");

  const visiblePage = () => {
    switch (page) {
      case "tableList":
        return <TableList />;
      case "tableMap":
        return <TableMap />;
      default:
        return <Placeholder />;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className="App-main">{visiblePage()}</main>
    </div>
  );
}

export default App;
