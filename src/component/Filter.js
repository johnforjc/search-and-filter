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
      <div className="filter-header row justify-content-between align-items-center" onClick={toogleFunction}>
        <div className="col">
          <div className="fs-3 px-2">Filter Language</div>
        </div>
        <div className="col text-end">{toogleFilterForm ? <BsFillCaretUpFill></BsFillCaretUpFill> : <BsFillCaretDownFill></BsFillCaretDownFill>}</div>
      </div>
      <div className="filter-form row">
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
    </div>
  );
};

export default Filter;
