import style from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const { urls, alt_description } = image;

  return (
    <div className={style.imgWrapper}>
      <img
        className={style.imgCard}
        src={urls.small}
        alt={alt_description}
        onClick={() => openModal(image)}
      />
    </div>
  );
};

export default ImageCard;
