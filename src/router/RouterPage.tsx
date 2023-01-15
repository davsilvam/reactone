import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { Chords } from '../pages/Chords'
import { Home } from '../pages/Home'
import { Scales } from '../pages/Scales'
import { Diatonic } from '../pages/Scales/subpages/Diatonic'
import { Harmonic } from '../pages/Scales/subpages/Harmonic'
import { Pentatonic } from '../pages/Scales/subpages/Pentatonic'
import { Transpose } from '../pages/Transpose'

export const RouterPage = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/scales" element={<Scales />} />
      <Route path="/chords" element={<Chords />} />
      <Route path="/transpose" element={<Transpose />} />

      <Route path="/scales/diatonic" element={<Diatonic />} />
      <Route path="/scales/harmonic" element={<Harmonic />} />
      <Route path="/scales/pentatonic" element={<Pentatonic />} />
    </>
  )
)
