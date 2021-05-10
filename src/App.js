import { useEffect, useState } from "react";
import Filter from "./component/Filter";
import Search from "./component/Search";
import Books from "./component/Books";

function App() {
  const [books, setbooks] = useState([]);
  const getData = () => {
    fetch("book.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setbooks(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="myApp" className="container p-5 my-5">
      <Filter></Filter>
      <Search></Search>
      <Books books={books}></Books>
    </div>
  );
}

export default App;
