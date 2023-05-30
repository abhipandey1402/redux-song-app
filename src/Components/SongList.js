import { useSelector, useDispatch } from 'react-redux'
import selectSong from '../actions/song.actions'
import '../style.css'

const SongList = () => {

    const songs = useSelector(state => state.songs)
    const dispatch = useDispatch()

    return (
        <div>
            <h2 className='title'>Songs App</h2>
            {
                songs.map((song, index) => (
                    <div key={index} className='songList' onClick={() => dispatch(selectSong(song))}>
                        <h3 className='songListTitle'>{index + 1} - {song.name}</h3>
                        <button className='songListButton'>Details</button>
                    </div>
                ))
            }
        </div>
    )
}

export default SongList;

