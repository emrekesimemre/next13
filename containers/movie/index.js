import FeaturedMovie from '@/components/featured-movie'
import React from 'react'
import Movies from '@/mocks/movies.json'
import Categories from '@/components/categories'
import Genres from '@/mocks/genres.json'
import MoviesSection from '@/components/movies-section'

const HomeContainer = ({movie}) => {
  return (
    <div>
      <FeaturedMovie movie={movie} isCompact={false} />
    </div>
  );
}

export default HomeContainer