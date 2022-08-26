import React, {useState} from 'react';
import axios from "axios";
import './App.css';
import Header from "../Header/Header";
import MovieList from "../MovieList/MovieList";

export type InitStateType = {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string
}

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
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<Array<InitStateType>>([initState]);

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
    <div className='container'>
      <Header
        movieName={movieName}
        setMovieName={setMovieName}
        getMoviesHandler={getMoviesHandler}
      />
      {error ? <p className='error'>{error}</p> : <MovieList data={data}/>}
    </div>
  );
};

export default App;
