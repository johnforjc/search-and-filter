import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Filter from "./component/Filter";
import Search from "./component/Search";
import Books from "./component/Books";

function App() {
  const [books, setbooks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

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
        const slice = myJson.slice((offset - 1) * perPage, offset * perPage);
        setbooks(slice);
        setPageCount(Math.ceil(myJson.length / perPage));
      });
  };

  useEffect(() => {
    getData();
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div id="myApp" className="container p-5 my-5">
      <Filter></Filter>
      <Search></Search>
      <Books books={books}></Books>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
