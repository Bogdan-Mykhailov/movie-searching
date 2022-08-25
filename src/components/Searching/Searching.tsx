import {ChangeEvent, FC, KeyboardEvent} from 'react';

type SearchingPropsType = {
  movie: string,
  setMovie: (movie: string) => void
  getMoviesHandler: (movie: string) => void
}

const Searching: FC<SearchingPropsType> = ({
                                             movie,
                                             setMovie,
                                             getMoviesHandler
                                           }) => {

  const searchButtonHandler = () => {
    getMoviesHandler(movie)
  }

  const searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMovie(event.currentTarget.value)
  }

  const onKeyDownHandler = (event: KeyboardEvent<HTMLButtonElement>) => {
    event.key === 'Enter' && searchButtonHandler()
  }

  return (
    <div>
      <input type="text" placeholder="Search" value={movie} onChange={searchInputHandler}/>
      <button onClick={searchButtonHandler} onKeyDown={onKeyDownHandler}>Search</button>
    </div>
  );
};

export default Searching;
