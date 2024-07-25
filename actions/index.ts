import axios, {AxiosError} from 'axios';
import {Dispatch} from 'redux';

export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

const API_URL = 'https://api.unsplash.com/photos';
const ACCESS_KEY = 'FaIcgUm_LJx15Sau6tjmV-w7YhhmnEs_QM47ZhP8Qo4';

interface FetchPhotosRequestAction {
  type: typeof FETCH_PHOTOS_REQUEST;
}

interface FetchPhotosSuccessAction {
  type: typeof FETCH_PHOTOS_SUCCESS;
  payload: any[];
}

interface FetchPhotosFailureAction {
  type: typeof FETCH_PHOTOS_FAILURE;
  payload: string;
}

export type PhotoActionTypes =
  | FetchPhotosRequestAction
  | FetchPhotosSuccessAction
  | FetchPhotosFailureAction;

export const fetchPhotos =
  () => async (dispatch: Dispatch<PhotoActionTypes>) => {
    dispatch({type: FETCH_PHOTOS_REQUEST});
    try {
      const response = await axios.get(`${API_URL}/?client_id=${ACCESS_KEY}`);
      dispatch({type: FETCH_PHOTOS_SUCCESS, payload: response.data});
    } catch (error) {
      const axiosError = error as AxiosError;
      dispatch({type: FETCH_PHOTOS_FAILURE, payload: axiosError.message});
    }
  };
