const CHOOSE_IMAGE = 'CHOOSE_IMAGE';
const CHOOSE_COLOR = 'CHOOSE_COLOR';
const CHANGE_TEXT = 'CHANGE_TEXT';

const initialState = { color: 'white', imageurl: null, text: null };

export default function imageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHOOSE_COLOR:
      return { color: payload, imageurl: null, text: null };
    case CHOOSE_IMAGE:
      return { ...state, imageurl: payload };
    case CHANGE_TEXT:
      return { ...state, text: payload };
    default:
      return state;
  }
}
