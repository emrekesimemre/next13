import React from 'react';
import MovieContainer from '@/containers/movie';
import Movies from '@/mocks/movies.json';
import { notFound } from 'next/navigation';
import { getMovie } from '@/services/movie';

const MoviePage = async ({ params, searchParams }) => {
  const movieDetails = await getMovie(params.id);
  if (!movieDetails) {
    return notFound();
  }
  if (searchParams.error === 'true') {
    throw new Error('Error happened');
  }
  return <MovieContainer movie={movieDetails} />;
};

export default MoviePage;
