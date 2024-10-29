import { Image } from "../App/App.types";
import style from "./ImageCard.module.css";

type Props = {
  image: Image;
  openModal: (image: Image) => void;
};

const ImageCard = ({ image, openModal }: Props) => {
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
