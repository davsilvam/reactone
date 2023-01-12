import React, { createContext, useContext, useState } from 'react'

export type Note = {
  id: number
  sharpMode: string
  bemolMode: string
}

interface MusicalContext {
  bemolMode: boolean
  setBemolMode: (bemolMode: boolean) => void
  CHROMATIC_SCALE: Note[]
  LETTERS_CHROMATIC_SCALE: Note[]
}

interface MusicalProviderProps {
  children: React.ReactNode
}

const MusicalContext = createContext<MusicalContext | null>(null)

export const MusicalProvider: React.FC<MusicalProviderProps> = ({
  children
}) => {
  const CHROMATIC_SCALE: Note[] = [
    { id: 0, sharpMode: 'Dó', bemolMode: 'Dó' },
    { id: 1, sharpMode: 'Dó♯', bemolMode: 'Ré♭ ' },
    { id: 2, sharpMode: 'Ré', bemolMode: 'Ré' },
    { id: 3, sharpMode: 'Ré♯', bemolMode: 'Mi♭' },
    { id: 4, sharpMode: 'Mi', bemolMode: 'Mi' },
    { id: 5, sharpMode: 'Fá', bemolMode: 'Fá' },
    { id: 6, sharpMode: 'Fá♯', bemolMode: 'Sol♭' },
    { id: 7, sharpMode: 'Sol', bemolMode: 'Sol' },
    { id: 8, sharpMode: 'Sol♯', bemolMode: 'Lá♭' },
    { id: 9, sharpMode: 'Lá', bemolMode: 'Lá' },
    { id: 10, sharpMode: 'Lá♯', bemolMode: 'Si♭' },
    { id: 11, sharpMode: 'Si', bemolMode: 'Si' }
  ]

  const LETTERS_CHROMATIC_SCALE: Note[] = [
    { id: 0, sharpMode: 'C', bemolMode: 'C' },
    { id: 1, sharpMode: 'C♯', bemolMode: 'D♭ ' },
    { id: 2, sharpMode: 'D', bemolMode: 'D' },
    { id: 3, sharpMode: 'D♯', bemolMode: 'E♭' },
    { id: 4, sharpMode: 'E', bemolMode: 'E' },
    { id: 5, sharpMode: 'F', bemolMode: 'F' },
    { id: 6, sharpMode: 'F♯', bemolMode: 'G♭' },
    { id: 7, sharpMode: 'G', bemolMode: 'G' },
    { id: 8, sharpMode: 'G♯', bemolMode: 'A♭' },
    { id: 9, sharpMode: 'A', bemolMode: 'A' },
    { id: 10, sharpMode: 'A♯', bemolMode: 'B♭' },
    { id: 11, sharpMode: 'B', bemolMode: 'B' }
  ]

  const [bemolMode, setBemolMode] = useState<boolean>(false)

  return (
    <MusicalContext.Provider
      value={{
        bemolMode,
        setBemolMode,
        CHROMATIC_SCALE,
        LETTERS_CHROMATIC_SCALE
      }}
    >
      {children}
    </MusicalContext.Provider>
  )
}

export function useMusical(): MusicalContext {
  const context = useContext(MusicalContext)

  if (!context) {
    throw new Error('useMusical must be used within a MusicalContext')
  }

  return context
}
