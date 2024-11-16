import axios from "axios";
import { FETCH_TODOS } from "./types";

const baseUrl = 'http://localhost:9091/api/todo';

export function fetchTodos() {
  return async function(dispatch) {
    // TODO: Handle errors from backend properly.
    try {
      return await axios.get(baseUrl).then(({ data }) => {
        dispatch(setTodos(data));
      });
    } catch (e) {
      console.error(e);
      throw new Error('Cannot GET todos.');
    }
  };
}

export function postTodo(todo) {
  return async function(dispatch) {
    // TODO: Handle errors from backend properly.
    try {
      return await axios.post(baseUrl, todo).then(({ data }) => {
        dispatch(fetchTodos());
      });
    } catch (e) {
      console.error(e);
      throw new Error('Cannot POST todo.');
    }
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}
