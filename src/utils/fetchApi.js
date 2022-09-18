import axios from "axios";

const BASE_URL = `https://${process.env.REACT_APP_RAPID_API_HOST}`;

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
  },
};

const fetchApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export default fetchApi;
