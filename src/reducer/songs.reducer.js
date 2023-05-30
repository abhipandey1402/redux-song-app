import { SELECT_SONG } from '../actions/actionTypes'

let initialState = null;

const songReducer = (state = initialState, action) => {

    if (action.type === SELECT_SONG) {
        return action.payload;
    }
    return state;
}

export default songReducer;

