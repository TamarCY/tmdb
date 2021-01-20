import './App.css';
import ActorsView from './components/ActorsView';
import Actor from './models/Actor';

function App() {
  const actorsArr = []
  actorsArr.push( new Actor ("Shira", "Has", 1995,
  'https://www.imdb.com/name/nm6024635/?ref_=fn_al_nm_1'
    , "https://m.media-amazon.com/images/M/MV5BN2RjMGNlNDgtMmM5Mi00NTEwLTk1MWItMDZkMGExMmM2ZmQ1XkEyXkFqcGdeQXVyNTQ4MzY4NjA@._V1_UY317_CR9,0,214,317_AL_.jpg" ));
  actorsArr.push( new Actor ("Gila", "Almagor", 1939, "https://www.imdb.com/name/nm0021734/?ref_=fn_al_nm_1", "https://m.media-amazon.com/images/M/MV5BOGRhMjMzNTQtMGZjYS00NWJkLTkyOTItMjFhMjlmNDFhN2MxXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_UY317_CR34,0,214,317_AL_.jpg"));
  return (
    <div className="App">
      
      <ActorsView actors={actorsArr}/>
    </div>
  );

}

export default App;
