const EpisodesList = ({episodes}) => {
  const list = episodes.results.read();

  return (
    <div>
      <h1>Episodes</h1>
      <ul>
        {list.map(episode => (
          <li key={episode.id}>{episode.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodesList;
