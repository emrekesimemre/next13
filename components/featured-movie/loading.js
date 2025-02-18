import React from 'react';
import Skeleton from '@/components/skeleton';
import styles from './styles.module.css';
import Loading from '@/components/loading';

function FeaturedMovieLoading() {
  return (
    <div className={styles.movieWrapper} style={{ height: 278 }}>
      <Loading />
    </div>
  );
}

export default FeaturedMovieLoading;
