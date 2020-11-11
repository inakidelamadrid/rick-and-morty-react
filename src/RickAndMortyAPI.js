import wrapPromise from './SuspenseWrapper';

const fetchEpisodes = () => {
  return fetch('https://rickandmortyapi.com/api/episode')
    .then(x => x.json())
    .then(res => res.results);
};

export const getAllEpisodes = () => {
  return {
    results: wrapPromise(fetchEpisodes()),
  };
};
