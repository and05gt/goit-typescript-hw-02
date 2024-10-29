import style from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <h2 className={style.errorMsg}>:( Something went wrong! Try again!</h2>
  );
};

export default ErrorMessage;
