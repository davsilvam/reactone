import React from 'react'
import { NoteCell } from '../NoteCell/index.'
import { Container } from './styles'

type Note = {
  id: number
  sharpMode: string
  bemolMode: string
}

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

interface TonesContainerProps {
  bemolMode: boolean
  changeIdentityNote: (id: number) => void
}

export const TonesContainer: React.FC<TonesContainerProps> = ({
  bemolMode,
  changeIdentityNote
}) => {
  return (
    <Container>
      {CHROMATIC_SCALE.map(note => (
        <NoteCell key={note.id} changeNote={() => changeIdentityNote(note.id)}>
          {bemolMode ? note.bemolMode : note.sharpMode}
        </NoteCell>
      ))}
    </Container>
  )
}