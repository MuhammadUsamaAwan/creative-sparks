import { Route, Routes } from 'react-router-dom';

import { Artists } from './components/Artists';
import { ArtSupplies } from './components/ArtSupplies';
import { Buy } from './components/Buy';
import { ExhibitionSchedule } from './components/ExhibitionSchedule';
import { Hero } from './components/Hero';
import { Hire } from './components/Hire';
import { HomeDecor } from './components/HomeDecor';
import { Paintings } from './components/Paintings';
import { Prints } from './components/Prints';
import { Shop } from './components/Shop';
import { Layout } from './layouts/Layout';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path='shop' element={<Shop />} />
        <Route path='paintings' element={<Paintings />} />
        <Route path='prints' element={<Prints />} />
        <Route path='home-decor' element={<HomeDecor />} />
        <Route path='art-supplies' element={<ArtSupplies />} />
        <Route path='artists' element={<Artists />} />
        <Route path='exhibition-schedule' element={<ExhibitionSchedule />} />
        <Route path='buy' element={<Buy />} />
        <Route path='hire' element={<Hire />} />
      </Route>
    </Routes>
  );
}
