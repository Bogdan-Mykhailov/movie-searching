import {FC} from 'react';

type ItemPropsType = {
  Poster: string,
  Title: string,
  Type?: string,
  Year: string,
  imdbID?: string
}

type MovieItemPropsType = {
  data: Array<ItemPropsType>
}

const MovieItem: FC<MovieItemPropsType> = ({
                                             data
                                           }) => {
  return (
    <div>
      {
        data.map((d, i) => <div key={i}>
          <span>{d.Title}</span>
          <span>{d.Year}</span>
          {d.Poster && <img src={d.Poster} alt=" movie poster"/>}
        </div>)
      }
    </div>
  );
};

export default MovieItem;
