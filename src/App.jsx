import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios'
// https://randomuser.me/api
function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");


  const fetchUser = async () => {
    return await axios.get("https://randomuser.me/api").then(({data}) => {
      console.log(data);
      return JSON.stringify(data);
    }).catch((err) => {
      console.error(err);
    })
  }
  


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button onClick={() => fetchUser()}>Fetch </button>
    </div>
  );
}

export default App;
