import React from 'react';
import MovieContainer from '@/containers/movie';
import Movies from '@/mocks/movies.json';
import { notFound } from 'next/navigation';

const MoviePage = ({ params, searchParams }) => {

  const movieDetails = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  if(!movieDetails) {
    return notFound();
  }
  if (searchParams.error === 'true') {
     throw new Error('Error happened');
  }
  return <MovieContainer movie={movieDetails} />;
};

export default MoviePage;
