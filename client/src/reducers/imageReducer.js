const CHOOSE_IMAGE = 'CHOOSE_IMAGE';
const CHOOSE_COLOR = 'CHOOSE_COLOR';

const initialState = { color: 'white', imageurl: null, text: '' };

export default function imageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHOOSE_COLOR:
      return { color: payload, imageurl: null, text: '' };
    case CHOOSE_IMAGE:
      return { ...state, imageurl: payload };
    default:
      return state;
  }
}
