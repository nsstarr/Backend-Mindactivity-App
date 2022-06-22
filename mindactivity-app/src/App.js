import React from "react";
import "./App.css";

function App() {
  const [affirmations, setAffirmations] = React.useState([]);

  React.useEffect(() => {
    fetchAffirmations();
  }, []);

  const fetchAffirmations = async () => {
    const response = await fetch("http://localhost:3001/mindactivity");
    const data = await response.json();
    setAffirmations(data.payload)
  }
  
// wrapping affirmations into an anon function stops "affirmations.app is not a function" errors

  return (
    <div className="App">{affirmations.map((t) => {
      return ( <div key={t.id}>{t.content}</div>)
    })}
    <h1>Hello world</h1></div>
  );
}

export default App;
