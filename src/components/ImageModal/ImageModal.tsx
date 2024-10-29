import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, image }) => {
  if (!image) return;

  const { urls, alt_description } = image;

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
      height: "680px",
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
        <img src={urls.regular} alt={alt_description} />
      </ReactModal>
    </div>
  );
};

export default ImageModal;
