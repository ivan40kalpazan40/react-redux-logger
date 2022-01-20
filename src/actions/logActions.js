import { GET_LOGS, LOGS_ERROR, SET_LOADING, ADD_LOG } from './types';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs`);
    const data = await res.json();

    dispatch({ type: GET_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Add New Log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(log),
    });
    const data = await res.json();
    dispatch({ type: ADD_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
