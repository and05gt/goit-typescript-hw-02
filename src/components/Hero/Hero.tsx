import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={style.hero}>
      <h1 className={style.title}>
        Application for searching and displaying images
      </h1>
    </div>
  );
};

export default Hero;
