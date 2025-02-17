import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

const Categories = ({ categories }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.id}`}
          className={styles.category}
        >
          <div className={styles.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
