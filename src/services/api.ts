import axios from "axios";
import { ImageData } from "../components/types";

axios.defaults.baseURL = "https://api.unsplash.com/";
const CLIENT_ID = "o1ykJh7t0-sJLNJtowa8v5Lxrko5nw2LJ57VGnEuUSE";

export const fetchImages = async (
  query: string,
  page = 1
): Promise<ImageData> => {
  const { data } = await axios.get<ImageData>(
    `search/photos/?client_id=${CLIENT_ID}&page=${page}&query=${query}&per_page=12`
  );
  return data;
};
