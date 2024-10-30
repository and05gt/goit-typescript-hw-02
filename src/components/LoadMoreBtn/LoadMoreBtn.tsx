import style from "./LoadMoreBtn.module.css";

interface Props {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <button className={style.loadBtn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
