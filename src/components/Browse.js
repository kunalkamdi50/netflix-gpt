import useNowPlayingMovies from '../hooks/useNowPlyingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
 useNowPlayingMovies();
 usePopularMovies();

  return (
    <div>
     <Header/>
     {showGptSearch ? (
      <GptSearch/>
    ) : (
     <>
      <MainContainer/>
      <SecondaryContainer/>
     </>
    )}
    </div>
  );
};
export default Browse;