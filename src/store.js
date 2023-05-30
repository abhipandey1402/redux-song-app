import { createStore, combineReducers } from "redux";
import { dataReducer } from "./reducer/data.reducer";
import songReducer from './reducer/songs.reducer';

const rootReducer = combineReducers({
    songs: dataReducer,
    selectedSong: songReducer 
})

const store = createStore(rootReducer);

export default store;