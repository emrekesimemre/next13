import FeaturedMovie from '@/components/featured-movie';
import React from 'react';
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';

const HomeContainer = ({
  topRatedMovies = [],
  selectedCategory,
  popularMovies = [],
  categories = [],
}) => {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} isCompact={true} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find(
              (genre) => genre.id.toString() === selectedCategory.id
            )?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Popular Films"
        movies={topRatedMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={popularMovies.slice(7, 13)}
      />
    </div>
  );
};

export default HomeContainer;
