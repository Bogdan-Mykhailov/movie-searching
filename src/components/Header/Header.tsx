import {FC} from 'react';
import Searching from "../Searching/Searching";
import './Header.css'
import logo from '../../assets/logo.png'

type HeaderPropsType = {
  movieName: string,
  setMovieName: (movieName: string) => void,
  getMoviesHandler: (movieName: string) => void
}

const Header: FC<HeaderPropsType> = ({
                                       movieName,
                                       setMovieName,
                                       getMoviesHandler
                                     }) => {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="logo"/>
      <h2 className='title'>Movies library</h2>
      <Searching
        movieName={movieName}
        setMovieName={setMovieName}
        getMoviesHandler={getMoviesHandler}
      />
    </header>
  );
};

export default Header;
