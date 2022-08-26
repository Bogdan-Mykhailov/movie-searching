import React, {FC} from 'react';
import MovieItem from "../MovieItem/MovieItem";
import {InitStateType} from "../App/App";
import './MovieList.css'

type MovieListPropsType = {
  data: Array<InitStateType>
}

const MovieList: FC<MovieListPropsType> = ({data}) => {
  return (
    <div className='movieListContainer'>
      <MovieItem data={data}/>
    </div>
  );
};

export default MovieList;
