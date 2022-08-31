import React from 'react';
import MoviesList from 'components/Modules/MoviesList/MoviesList';

export default function Home() {
  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList />
    </div>
  );
}
