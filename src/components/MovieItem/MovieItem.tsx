import {FC} from 'react';
import Searching from "../Searching/Searching";

type MovieItemPropsType = {
  movie: string,
  setMovie: (movie: string) => void,
  getMoviesHandler: (movie: string) => void,
}

const MovieItem: FC<MovieItemPropsType> = ({
                                             movie,
                                             setMovie,
                                             getMoviesHandler
                                           }) => {
  return (
    <div>
      <Searching
        movie={movie}
        setMovie={setMovie}
        getMoviesHandler={getMoviesHandler}
      />
    </div>
  );
};

export default MovieItem;
