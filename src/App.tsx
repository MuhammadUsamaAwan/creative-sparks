import { Route, Routes } from 'react-router-dom';

import { Hero } from './components/Hero';
import { Layout } from './layouts/Layout';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Hero />} />
      </Route>
    </Routes>
  );
}
