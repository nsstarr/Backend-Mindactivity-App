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
    setAffirmations(data)
  }

  return (
    <div className="App">{affirmations.map((t) => (
      <div key={t.id}>{t.title}</div>
    ))}
    <div>Hello world</div></div>
  );
}

export default App;
