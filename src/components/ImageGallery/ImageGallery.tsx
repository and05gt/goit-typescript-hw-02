import { Image } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

type Props = {
  images: Image[];
  openModal: (image: Image) => void;
};

const ImageGallery = ({ images, openModal }: Props) => {
  return (
    <ul className={style.imageList}>
      {images.map((image) => (
        <li key={image.id} className={style.imageListItem}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
