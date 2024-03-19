import './App.css';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import FavoriteVideosPage from './pages/FavoriteVideosPage';
import PeopleOfNotePage from './pages/PeopleOfNotePage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUsPage />
      <FavoriteVideosPage />
      <PeopleOfNotePage />
    </div>
  );
}

export default App;
