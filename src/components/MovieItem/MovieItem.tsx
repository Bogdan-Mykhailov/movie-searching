import {FC} from 'react';
import './MovieItem.css'
import {InitStateType} from "../App/App";

type MovieItemPropsType = {
  data: Array<InitStateType>
}

const MovieItem: FC<MovieItemPropsType> = ({
                                             data
                                           }) => {
  return (
    <div>
      {
        data.map((d, i) => <div className='itemWrapper' key={i}>
          {d.Poster && <>
            <img className='posterImg' src={d.Poster} alt=" movie poster"/>
            <div className='movieInfo'>
              <span className='movieTitle'>{d.Title}</span>
              <span className='movieYear'>{d.Year}</span>
            </div></>}
        </div>)
      }
    </div>
  );
};

export default MovieItem;
