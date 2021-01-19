import { axios, APIKEY } from "../../helpers/axios";

export const LoadGenres = () => (dispatch) => {
  dispatch({ type: "GENRE_PENDING" });
  axios
    .get(`/genre/movie/list?api_key=${APIKEY}`)
    .then((res) => {
      dispatch({ type: "GENRE_FULLFILED", payload: res.data.genres });
    })
    .catch((err) => {
      if (!err.response) return dispatch({ type: "GENRE_NETERROR" });
      return dispatch({
        type: "GENRE_REJECTED",
        payload: err.response.data.status_message,
      });
    });
};
