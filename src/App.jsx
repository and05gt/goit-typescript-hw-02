import { useState, useEffect } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSearch = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const openModal = (modalData) => {
    setSelectedImage(modalData);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {page < totalPages && <LoadMoreBtn onClick={handleChangePage} />}
      <ImageModal
        isOpen={isOpen}
        closeModal={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
