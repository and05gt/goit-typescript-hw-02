import ReactModal from "react-modal";
import { Image } from "../types";
import style from "./ImageModal.module.css";
import { BiLike } from "react-icons/bi";
ReactModal.setAppElement("#root");

interface Props {
  isOpen: boolean;
  image: Image | null;
  closeModal: () => void;
}

const ImageModal = ({ isOpen, closeModal, image }: Props) => {
  if (!image) return;

  const { urls, alt_description, likes } = image;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      border: "none",
      outline: "none",
    },
    overlay: {
      backgroundColor: "rgba(46, 47, 66, 0.80)",
      zIndex: 9999,
    },
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
        <div className={style.modalWrapper}>
          <img
            className={style.modalImage}
            src={urls.regular}
            alt={alt_description}
          />
          <div className={style.modalImageInfo}>
            <p className={style.modalInfoLikes}>
              <BiLike /> {likes}
            </p>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
