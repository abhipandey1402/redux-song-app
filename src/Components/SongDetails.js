import { useSelector } from "react-redux";
import '../style.css'



const SongDetail = () => {
    // const dispatch = useDispatch();
    const selectedSong = useSelector(state => state.selectedSong);

    return (
        <div>
            {
                selectedSong && <div className="songDetail">
                    <h3>{selectedSong.name}</h3>
                    <p>{selectedSong.author}</p>
                    <p>{selectedSong.duration}</p>
                    <p>{selectedSong.genere}</p>
                    <p>{selectedSong.album}</p>
                </div>
            }
        </div>
    )
}

export default SongDetail
