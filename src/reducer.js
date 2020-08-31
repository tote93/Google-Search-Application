export const initialState = {
  query: "",
  currentPage: 11,
  imagesResults: [],
  webResults: [],
  totalTime: "",
  totalResults: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      // This case set the web and image results
      return {
        ...state,
        totalTime: action.totalTime,
        imagesResults: action.images,
        webResults: action.webs,
        totalResults: action.totalResults,
      };
    case "SET_QUERY":
      // This case set the search query
      return { ...state, currentPage: 11, query: action.query };
    case "SET_PAGE":
      // This case set the page to the next 11 (1 page = num*10 +1)
      return { ...state, currentPage: 10 * action.page + 1 };
    default:
      return { state };
  }
};
export default reducer;
