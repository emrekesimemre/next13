import HomeContainer from '@/containers/home';
import Image from 'next/image';
import Movies from '@/mocks/movies.json';

export default function Home({ params }) {
  console.log('🚀 ~ Home ~ params:', params);
  let selectedCategory;
  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}
