import { csrfFetch } from "./csrf"

const SET_USER = 'session/set_user'
const REMOVE_USER = 'session/remove_user'

// ACTION CREATORS

const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

const removeUser = () => {
  return {
    type: REMOVE_USER
  }
}

// THUNKS

export const logInUser = (user) => async dispatch => {

  const { credential, password } = user;

  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password
    })
  });

  if (response.ok) {
    const userData = await response.json();
    dispatch(setUser(userData));
    return userData;
  } else {
    const errorMessage = await response.json();
    return errorMessage;
  }


}

export const logOutUser = () => async dispatch => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE'
  });

  const data = await response.json();
  dispatch(removeUser());
  return data;
}

export const getCurrentUser = () => async dispatch => {

  const response = await csrfFetch('/api/session');
  if (response.ok) {
    const user = await response.json();
    dispatch(setUser(user))
    return user;
  }
}

export const signUpNewUser = (userInfo) => async dispatch => {
  const { email, username, password, firstName, lastName } = userInfo;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email,
      username,
      password,
      firstName,
      lastName
    })
  }
  const response = await csrfFetch('/api/users', options);

    if (response.ok) {
      const userData = await response.json();
      dispatch(setUser(userData));
      return userData;
    } else {
      const errorMessage = await response.json();
      return errorMessage;
    }

}

// REDUCER

const initialState = {
  user: null
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const newState = { ...state};
      newState.user = action.user
      return newState;
    }
    case REMOVE_USER: {
      const newState = { ...state};
      newState.user = null;
      return newState;
    }
    default:
      return state
  }
}

export default sessionReducer;
