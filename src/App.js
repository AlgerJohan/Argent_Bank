import React, { Fragment, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://jsonplaceholder.typicode.com/posts");
      setData(response.data);
      console.log("updated");
    };
    fetchData();
    console.log("mounted");
  }, []);
  console.log(data);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;
