import { Toaster, toast } from "react-hot-toast";
import { GoSearch } from "react-icons/go";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value;

    if (form.elements.query.value.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <>
      <header className={style.header}>
        <form onSubmit={handleSubmit}>
          <input
            className={style.formInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={style.formBtn} type="submit">
            <GoSearch className={style.BtnIcon} />
          </button>
        </form>
      </header>
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
};

export default SearchBar;
