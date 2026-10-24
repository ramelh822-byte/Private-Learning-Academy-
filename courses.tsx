
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { courses, categories } from '../data/courses';
import styles from './courses.module.css';

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const allCategories = [
    { id: 'all', label: 'All Courses', emoji: '✨' },
    ...categories.map((category) => ({
      id: category.id,
      label: category.label,
      emoji: category.emoji,
    })),
  ];

  const normalizedSearch = search.trim().toLowerCase();

  const filtered = courses.filter((course) => {
    const selectedCategory = categories.find(
      (category) => category.id === activeFilter
    );

    const matchCategory =
      activeFilter === 'all' ||
      selectedCategory?.label === course.category;

    const matchSearch =
      normalizedSearch === '' ||
      course.title.toLowerCase().includes(normalizedSearch) ||
      course.category.toLowerCase().includes(normalizedSearch) ||
      course.description.toLowerCase().includes(normalizedSearch);

    return matchCategory && matchSearch;
  });

  const showCategorySections =
    activeFilter === 'all' && normalizedSearch === '';

  return (
    <>
      <Head>
        <title>All Courses — Planet Leads Academy</title>
        <meta
          name="description"
          content="Explore AI-guided courses in Faith, Languages, Music, Programming, and Business at Planet Leads Academy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.page}>
        <Navbar />

        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroBg} />

            <div className="container">
              <h1 className={styles.title}>All Courses</h1>

              <p className={styles.sub}>
                {courses.length} AI-powered courses across{' '}
                {categories.length} categories
              </p>

              <div className={styles.searchWrap}>
                <span className={styles.searchIcon} aria-hidden="true">
                  🔍
                </span>

                <input
                  className={styles.search}
                  type="search"
                  placeholder="Search courses..."
                  aria-label="Search courses"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />

                {search && (
                  <button
                    type="button"
                    className={styles.searchClear}
                    onClick={() => setSearch('')}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </section>

          <div className="container">
            <nav
              className={styles.filters}
              aria-label="Filter courses by category"
            >
              {allCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`${styles.filterBtn} ${
                    activeFilter === category.id
                      ? styles.filterActive
                      : ''
                  }`}
                  aria-pressed={activeFilter === category.id}
                  onClick={() => setActiveFilter(category.id)}
                >
                  <span aria-hidden="true">{category.emoji}</span>{' '}
                  {category.label}
                </button>
              ))}
            </nav>

            {(normalizedSearch || activeFilter !== 'all') && (
              <p className={styles.resultCount} aria-live="polite">
                {filtered.length} course
                {filtered.length !== 1 ? 's' : ''} found
                {normalizedSearch && (
                  <>
                    {' '}for <strong>&quot;{search.trim()}&quot;</strong>
                  </>
                )}
              </p>
            )}

            {showCategorySections ? (
              <div className={styles.categorySections}>
                {categories.map((category) => (
                  <section
                    key={category.id}
                    className={styles.catSection}
                    aria-labelledby={`category-${category.id}`}
                  >
                    <div className={styles.catHeader}>
                      <span className={styles.catEmoji} aria-hidden="true">
                        {category.emoji}
                      </span>

                      <div>
                        <h2
                          id={`category-${category.id}`}
                          className={styles.catTitle}
                        >
                          {category.label}
                        </h2>

                        <span className={styles.catCount}>
                          {category.courses.length} course
                          {category.courses.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>

                    <div className={styles.grid}>
                      {category.courses.map((course) => (
                        <CourseCard
                          key={course.id}
                          course={course}
                          showCategory={false}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : filtered.length > 0 ? (
              <div className={styles.grid}>
                {filtered.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <span className={styles.emptyIcon} aria-hidden="true">
                  🔍
                </span>

                <p>No courses found. Try a different search or category.</p>

                <button
                  type="button"
                  className={styles.emptyReset}
                  onClick={() => {
                    setSearch('');
                    setActiveFilter('all');
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
