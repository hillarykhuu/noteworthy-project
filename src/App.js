import './App.css';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import FavoriteVideosPage from './pages/FavoriteVideosPage';
import PeopleOfNotePage from './pages/PeopleOfNotePage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUsPage />
      <div className='h-96'>delete me!</div>
      <div className='h-96'>delete me!</div>
      <div className='h-96'>delete me!</div>
      <div className='h-96'>delete me!</div>
      <div className='h-96'>delete me!</div>
      <div className='h-96'>delete me!</div>
      <FavoriteVideosPage />
      <PeopleOfNotePage />
    </div>
  );
}

export default App;
