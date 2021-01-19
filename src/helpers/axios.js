import Axios from "axios";

export const IMAGE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
export const APIKEY = "2fccde01a371b106b09a241d6d1d5b49";

export const axios = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
