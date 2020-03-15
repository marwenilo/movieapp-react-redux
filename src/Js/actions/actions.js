import {
    DELETE_MOVIE,
    EDIT_MOVIE,
    ADD_MOVIE
  } from '../Constants/actions-types';

  export const addNewMovie = payload => ({
    type: ADD_MOVIE,
    payload
  });

  export const handleEdit = payload => ({
    type: EDIT_MOVIE,
    payload:{
        ...payload,
        id:Date.now()
    }
  });

  export const handlDelete = payload => ({
    type: DELETE_MOVIE,
    payload
  });
