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
  results: Image[];
  total_pages: number;
}
