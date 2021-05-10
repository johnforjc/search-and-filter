import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Filter from "./component/Filter";
import Search from "./component/Search";
import Books from "./component/Books";

function App() {
  const [books, setbooks] = useState([]);
  const [offset, setOffset] = useState(1);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [languageSelected, setlanguageSelected] = useState("");
  const [languageList, setlanguageList] = useState([]);

  const getLanguageList = () => {
    fetch("language.json", {
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
        setlanguageList(myJson);
      });
  };

  useEffect(() => {
    getLanguageList();
  }, []);

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
        const bookFilter = languageSelected == "" ? myJson : myJson.filter((data) => data.language == languageSelected);
        const slice = bookFilter.slice((offset - 1) * perPage, offset * perPage);
        console.log(slice, offset, perPage);
        setbooks(slice);
        setPageCount(Math.ceil(bookFilter.length / perPage));
      });
  };

  useEffect(() => {
    getData();
  }, [offset, languageSelected]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const filterLanguage = (selected) => {
    setlanguageSelected(selected);
  };

  return (
    <div id="myApp" className="container p-5 my-5">
      <Filter filterLanguage={filterLanguage} languageList={languageList}></Filter>
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
