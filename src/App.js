import {Suspense} from 'react';
import './App.css';

import {createResource} from './PersonAPI';
import Person from './Person';

const resource = createResource();

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Person resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
