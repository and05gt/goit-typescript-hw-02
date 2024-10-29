import { MagnifyingGlass } from "react-loader-spinner";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass={style.magnifyingGlassWrapper}
        glassColor="#c0efff"
        color="#e15b64"
      />
    </>
  );
};

export default Loader;
