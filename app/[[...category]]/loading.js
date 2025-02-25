import React from 'react'
import CategoriesLoading from '@/components/categories/loading'
import FeaturedMovieLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'

const Loading = () => {
  return (
    <div>
      <FeaturedMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
    </div>
  );
}

export default Loading