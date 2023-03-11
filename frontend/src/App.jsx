import { useState, useEffect } from "react";
import { connect, sendMsg } from "./api";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    connect();
  }, []);

  const send = () => {
    console.log("hello");
    sendMsg("hello");
  };

  return (
    <>
      <div className="App">
        <button onClick={() => send()}>Hit</button>
      </div>
    </>
  );
};

export default App;
