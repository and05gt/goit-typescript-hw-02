import { Toaster, toast } from "react-hot-toast";
import { GoSearch } from "react-icons/go";
import style from "./SearchBar.module.css";
import { FormEvent, useRef } from "react";

interface Props {
  onSubmit: (value: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const query = inputRef.current?.value.trim();

    if (!query) {
      toast.error("Please enter search term!");
      return;
    }

    onSubmit(query);
    e.currentTarget.reset();
  };

  return (
    <>
      <header className={style.header}>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
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
