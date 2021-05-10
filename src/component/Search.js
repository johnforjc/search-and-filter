import { BsSearch } from "react-icons/bs";

const Search = ({ searchSetting }) => {
  const onChangeInput = (e) => {
    console.log(e.target.value);
    if (e.target.value.length >= 3) searchSetting(e.target.value);
    else searchSetting("");
  };
  return (
    <div className="row justify-content-between mb-4">
      <input type="search" name="" id="" className="search-box col-9 fs-3" placeholder="Search by title" onChange={onChangeInput} />
      <BsSearch className="col-2 center-icon fs-3"></BsSearch>
    </div>
  );
};

export default Search;
