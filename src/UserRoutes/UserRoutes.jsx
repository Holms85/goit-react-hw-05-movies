import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('../components/Pages/Home/Home'));
const Movies = lazy(() => import('../components/Pages/Movies/Movies'));
const NotFound = lazy(() => import('../components/Pages/NotFound/NotFound'));
const SingleMoviePage = lazy(() =>
  import('../components/Pages/SingleMoviePage/SingleMoviePage')
);
const CastPage = lazy(() => import('components/Pages/CastPage/CastPage'));
const ReviewsPage = lazy(() =>
  import('components/Pages/ReviewsPage/ReviewsPage')
);

export default function UserRoutes() {
  return (
    <Suspense fallback={<p>...Loading Page</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
