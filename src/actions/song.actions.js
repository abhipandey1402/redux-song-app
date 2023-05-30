import {SELECT_SONG} from './actionTypes'

const selectSong = (song) => {

    return(
        {
            type: SELECT_SONG,
            payload: song
        }
    )
}

export default selectSong;