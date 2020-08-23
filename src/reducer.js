export const initialState = {
  query: "",
  currentPage: 11,
  imagesResults: [],
  webResults: [],
  errors: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      // This case set the web and image results
      return {
        ...state,
        imagesResults: action.images,
        webResults: action.webs,
        totalResults: action.results,
      };
    case "SET_QUERY":
      // This case set the search query
      return { ...state, currentPage: 11, query: action.query };
    case "SET_PAGE":
      // This case set the page to the next 11 (1 page = num*10 +1)
      return { ...state, currentPage: 10 * action.page + 1 };
    case "SET_ERROR":
      // Set the error state
      return { ...state, errors: action.error };
    default:
      return { state };
  }
};
export default reducer;
