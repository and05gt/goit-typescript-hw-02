import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const CLIENT_ID = "o1ykJh7t0-sJLNJtowa8v5Lxrko5nw2LJ57VGnEuUSE";

export const fetchImages = async (query, page = 1) => {
  const { data } = await axios.get(
    `search/photos/?client_id=${CLIENT_ID}&page=${page}&query=${query}&per_page=12`
  );
  return data;
};
