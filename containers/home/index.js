import FeaturedMovie from '@/components/featured-movie'
import React from 'react'
import Movies from '@/mocks/movies.json'
import Categories from '@/components/categories'
import Genres from '@/mocks/genres.json'
import MoviesSection from '@/components/movies-section'

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} isCompact={true} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MoviesSection title="Popular Films" movies={Movies.results.slice(1, 7)} />
      <MoviesSection title="Your Favorites" movies={Movies.results.slice(7, 13)} />
    </div>
  );
}

export default HomeContainer