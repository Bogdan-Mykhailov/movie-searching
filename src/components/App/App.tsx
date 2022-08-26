import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import MovieItem from "../MovieItem/MovieItem";

const App = () => {

  const API_KEY = '97f67e67'
  const [movieName, setMovieName] = useState<string>('');
  const [poster, setPoster] = useState();
  const [year, setYear] = useState();
  const [title, setTitle] = useState();
  const [error, setError] = useState(false);

  const getMoviesHandler = () => {
    axios.get(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`)
      .then(res => {
        console.log(res)
        setTitle(res.data.Title)
        setYear(res.data.Year)
        setPoster(res.data.Poster)
         if (res.data.Response === 'False') {
           setError(res.data.Error);
         }
      })
  }

  return (
    <div className="App">
      <MovieItem
        movieName={movieName}
        setMovieName={setMovieName}
        getMoviesHandler={getMoviesHandler}
      />
      <p>{error}</p>
      <div> <p>{title}</p> <p>{year}</p> <img src={poster} alt=""/> </div>
    </div>
  );
};

export default App;
