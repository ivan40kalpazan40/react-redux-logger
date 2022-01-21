import {
  TECHS_ERROR,
  ADD_TECH,
  GET_TECHS,
  DELETE_TECH,
  SET_LOADING,
} from './types';

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/techs`);
    const data = await res.json();

    dispatch({ type: GET_TECHS, payload: data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};

// Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
