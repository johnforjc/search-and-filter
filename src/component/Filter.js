import { BsFillCaretDownFill } from "react-icons/bs";

const Filter = () => {
  return (
    <div className="filter mb-4">
      <div className="filter-header row justify-content-between align-items-center">
        <div className="col">
          <div className="fs-3 px-2">Filter</div>
        </div>
        <div className="col text-end">
          <BsFillCaretDownFill></BsFillCaretDownFill>
        </div>
      </div>
      <div className="filter-form"></div>
    </div>
  );
};

export default Filter;
