import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../Actions/actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (el) => el.gender === action.payload
        ),
      };
    case ORDER:
      let copy = state.allCharacters;
      let order = copy.sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: order,
      };
    default:
      return state;
  }
};

export default reducer;
