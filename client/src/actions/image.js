const CHOOSE_IMAGE = 'CHOOSE_IMAGE';
const CHOOSE_COLOR = 'CHOOSE_COLOR';

export const chooseColor = (color) => (dispatch) => {
  dispatch({ type: CHOOSE_COLOR, payload: color });
};

export const chooseImage = (imagurl) => (dispatch) => {
  dispatch({ type: CHOOSE_IMAGE, payload: imagurl });
};
