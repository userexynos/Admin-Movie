const initialState = {
  loading: true,
  genres: [],
  error: "",
};

const GenreReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GENRE_PENDING":
      return {
        ...state,
        loading: true,
        genres: [],
        error: "",
      };
    case "GENRE_FULLFILED":
      return {
        ...state,
        genres: payload,
        loading: false,
        error: "",
      };
    case "GENRE_REJECTED":
      return {
        ...state,
        loading: false,
        genres: [],
        error: payload,
      };
    case "GENRE_NETERROR":
      return {
        ...state,
        loading: false,
        genres: [],
        error: "Network Error",
      };

    default:
      return state;
  }
};

export default GenreReducer;
