import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";

// export const addFavorite = (character) => {
//     return { type: ADD_FAVORITE, payload: character};
// };

export const getCharacterDetail = (id) => {
    return async function (dispatch) {
      const URL_BASE = "http://localhost:3001";
      const response = await axios.get(`${URL_BASE}/detail/${id}`);
      dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
    };
  };

export const removeFavorite = (id) => {
    return {  type: REMOVE_FAVORITE, payload: id };
};

export const getFavorites = () => {
    return async function (dispatch) {
      const URL_BASE = "http://localhost:3001";
      const response = await axios.get(`${URL_BASE}/rickandmorty/favs`);
      dispatch({ type: GET_FAVORITES, payload: response.data });
    };
};