export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
}

export interface ImageData {
  total_pages: number;
  totalPages: number;
  results: Image[];
}
