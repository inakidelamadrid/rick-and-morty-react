import {Suspense} from 'react';
import './App.css';

// import {createResource} from './PersonAPI';
import {getAllEpisodes} from './RickAndMortyAPI';

import EpisodesList from './EpisodesList';
// import Person from './Person';

// const resource = createResource();
const episodes = getAllEpisodes();

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <EpisodesList episodes={episodes} />
      </Suspense>
    </div>
  );
}

export default App;
