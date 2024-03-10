import { useRef } from "react";
import "./styles/FormSearch.css";

const FormSearch = ({ setLocationSeleted }) => {
  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationSeleted(inputSearch.current.value.trim());
    inputSearch.current.value = "";
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        ref={inputSearch}
        type="text"
        placeholder="Type to search..."
      />
      <button className="form__btn">Search</button>
    </form>
  );
};

export default FormSearch;
