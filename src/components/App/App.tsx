import React, {useState} from 'react';
import axios from "axios";
import MovieItem from "../MovieItem/MovieItem";
import Searching from "../Searching/Searching";
import './App.css';

const App = () => {

  const initState = {
    Poster: "",
    Title: "",
    Type: "",
    Year: "",
    imdbID: ""
  }

  const API_KEY = '97f67e67'
  const [movieName, setMovieName] = useState<string>('');
  const [error, setError] = useState('');
  const [data, setData] = useState([initState]);


  const getMoviesHandler = () => {
    axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`)
      .then(res => {
        if (res.data.Response === 'False') {
          setError('Movie not found!');
          setTimeout(() => {
            setError('')
          }, 2000)
        } else {
          setData(res.data.Search)
        }
      })
  }

  return (
    <div className='App'>
      <Searching
        movieName={movieName}
        setMovieName={setMovieName}
        getMoviesHandler={getMoviesHandler}
      />
      <div>

      </div>
      <MovieItem
        data={data}
      />
      <p>{error}</p>
    </div>
  );
};

export default App;
