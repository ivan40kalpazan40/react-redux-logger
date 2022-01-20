import {
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING,
  ADD_LOG,
  UPDATE_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
} from './types';

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

// Delete Log
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, { method: 'DELETE' });
    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Update Log
export const updateLog = (log) => async (dispatch) => {
  try {
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(log),
    });
    const data = await res.json();
    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Set Current Log
export const setCurrent = (log) => {
  return { type: SET_CURRENT, payload: log };
};

// Clear Current
export const clearCurrent = () => {
  return { type: CLEAR_CURRENT };
};

// Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
