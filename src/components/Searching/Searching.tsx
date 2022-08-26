import {ChangeEvent, FC, KeyboardEvent} from 'react';
import './Searching.css'

type SearchingPropsType = {
  movieName: string,
  setMovieName: (movieName: string) => void
  getMoviesHandler: (movieName: string) => void
}

const Searching: FC<SearchingPropsType> = ({
                                             movieName,
                                             setMovieName,
                                             getMoviesHandler
                                           }) => {

  const searchButtonHandler = () => {
    getMoviesHandler(movieName)
  }

  const searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMovieName(event.currentTarget.value)
  }

  const onKeyDownHandler = (event: KeyboardEvent<HTMLButtonElement>) => {
    event.key === 'Enter' && searchButtonHandler()
  }

  return (
    <div className='searchingWrapper'>
      <input
        type="text"
        placeholder="Search"
        value={movieName}
        onChange={searchInputHandler}
        className='headerSearchInput'
      />
      <button
        onClick={searchButtonHandler}
        onKeyDown={onKeyDownHandler}
        className='headerSearchBtn'
      >Search
      </button>
    </div>
  );
};

export default Searching;
