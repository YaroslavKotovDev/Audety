import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
} from '../actions';

interface Photo {
  id: string;
  description: string | null;
  urls: {
    thumb: string;
    full: string;
  };
  user: {
    name: string;
  };
}

interface PhotoState {
  loading: boolean;
  photos: Photo[];
  error: string | null;
}

const initialState: PhotoState = {
  loading: false,
  photos: [],
  error: null,
};

interface FetchPhotosRequestAction {
  type: typeof FETCH_PHOTOS_REQUEST;
}

interface FetchPhotosSuccessAction {
  type: typeof FETCH_PHOTOS_SUCCESS;
  payload: Photo[];
}

interface FetchPhotosFailureAction {
  type: typeof FETCH_PHOTOS_FAILURE;
  payload: string;
}

type PhotoActionTypes =
  | FetchPhotosRequestAction
  | FetchPhotosSuccessAction
  | FetchPhotosFailureAction;

export const photoReducer = (
  state = initialState,
  action: PhotoActionTypes,
): PhotoState => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return {...state, loading: true};
    case FETCH_PHOTOS_SUCCESS:
      return {...state, loading: false, photos: action.payload};
    case FETCH_PHOTOS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
