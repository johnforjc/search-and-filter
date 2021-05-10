import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useState } from "react";

const Filter = ({ filterLanguage, languageList }) => {
  const [toogleFilterForm, setToogleFilterForm] = useState(false);

  const toogleFunction = () => {
    setToogleFilterForm(!toogleFilterForm);
  };

  const changeState = (e) => {
    filterLanguage(e.target.value);
  };

  return (
    <div className="filter mb-4">
      <div className="filter-header row justify-content-between align-items-center">
        <div className="col">
          <div className="fs-3 px-2">Filter Language</div>
        </div>
        <div className="col text-end">{toogleFilterForm ? <BsFillCaretUpFill onClick={toogleFunction}></BsFillCaretUpFill> : <BsFillCaretDownFill onClick={toogleFunction}></BsFillCaretDownFill>}</div>
        {toogleFilterForm && (
          <select name="cars" id="cars" onChange={changeState}>
            <option value="">Any</option>
            {languageList.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="filter-form"></div>
    </div>
  );
};

export default Filter;
