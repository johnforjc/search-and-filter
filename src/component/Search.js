import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="row justify-content-between mb-4">
      <input type="search" name="" id="" className="search-box col-9 fs-3" placeholder="Search by title" />
      <BsSearch className="col-2 center-icon fs-3"></BsSearch>
    </div>
  );
};

export default Search;
