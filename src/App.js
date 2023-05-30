import React from "react";
import SongList from "./Components/SongList";
import SongDetail from "./Components/SongDetails";

const App  =() =>{
  

    return (
        <div className="songApp">
            <SongList/>
           
            <SongDetail/>
        </div>
    );
}

export default App;