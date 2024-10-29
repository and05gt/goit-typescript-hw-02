import { useState, useEffect } from "react";
import "./App.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import { fetchImages } from "../../services/api";
import { Image } from "./App.types";

interface ImageData {
  total_pages: number;
  totalPages: number;
  results: Image[];
}

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async (): Promise<void> => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data: ImageData = await fetchImages(query, page);
        setImages((prev: Image[]): Image[] => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangePage = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const openModal = (modalData: Image): void => {
    setSelectedImage(modalData);
    setIsOpen(true);
  };

  const closeModal = (): void => {
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
};

export default App;
