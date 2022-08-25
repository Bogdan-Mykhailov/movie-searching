import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import MovieItem from "../MovieItem/MovieItem";

const App = () => {

  const API_KEY = '97f67e67'
  const [movie, setMovie] = useState<string>('')

  const getMoviesHandler = () => {
    axios.get(`https://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`)
      .then(res => {
        console.log(res.data);
      })
  }

  return (
    <div className="App">
      <MovieItem
        movie={movie}
        setMovie={setMovie}
        getMoviesHandler={getMoviesHandler}
      />
    </div>
  );
};

export default App;
