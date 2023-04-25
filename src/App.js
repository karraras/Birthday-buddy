import React from "react";
import data from "./data";
import "./index.css";
import List from "./List";
export default function App() {
  const [day, setDay] = React.useState(data);

  const dat = day.map((el) => {
    return <List key={el.id} src={el.image} name={el.name} age={el.age} />;
  });
  function handleClick() {
    setDay(() => {
      return [];
    });
  }

  return (
    <main>
      <div className="container">
        {day.length > 1 ? (
          <h3>5 Birthdays Today</h3>
        ) : (
          <h3>0 Birthdays Today</h3>
        )}
        {dat}
        <button onClick={handleClick}>Clear All</button>
      </div>
    </main>
  );
}
