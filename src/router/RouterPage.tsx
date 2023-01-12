import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MusicalProvider } from '../contexts/MusicalContext'
import { Chords } from '../pages/Chords'
import { Home } from '../pages/Home'
import { Scales } from '../pages/Scales'
import { Diatonic } from '../pages/Scales/subpages/Diatonic'
import { Harmonic } from '../pages/Scales/subpages/Harmonic'
import { Pentatonic } from '../pages/Scales/subpages/Pentatonic'

export const RouterPage: React.FC = () => {
  return (
    <MusicalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scales" element={<Scales />} />
          <Route path="/chords" element={<Chords />} />

          <Route path="/scales/diatonic" element={<Diatonic />} />
          <Route path="/scales/harmonic" element={<Harmonic />} />
          <Route path="/scales/pentatonic" element={<Pentatonic />} />
        </Routes>
      </BrowserRouter>
    </MusicalProvider>
  )
}
