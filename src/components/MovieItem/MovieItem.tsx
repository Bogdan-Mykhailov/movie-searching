import {FC} from 'react';
import Searching from "../Searching/Searching";

type MovieItemPropsType = {
  movieName: string,
  setMovieName: (movieName: string) => void,
  getMoviesHandler: (movieName: string) => void,
}

const MovieItem: FC<MovieItemPropsType> = ({
                                             movieName,
                                             setMovieName,
                                             getMoviesHandler
                                           }) => {
  return (
    <div>
      <Searching
        movieName={movieName}
        setMovieName={setMovieName}
        getMoviesHandler={getMoviesHandler}
      />
    </div>
  );
};

export default MovieItem;
