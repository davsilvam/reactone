import React from 'react'
import { Note } from '../../contexts/MusicalContext'
import { NoteCell } from '../NoteCell/index.'
import { Container } from './styles'

interface TonesContainerProps {
  scale: Note[]
  bemolMode: boolean
  changeIdentityNote: (id: number) => void
}

export const TonesContainer: React.FC<TonesContainerProps> = ({
  scale,
  bemolMode,
  changeIdentityNote
}) => {
  return (
    <Container>
      {scale.map(note => (
        <NoteCell key={note.id} changeNote={() => changeIdentityNote(note.id)}>
          {bemolMode ? note.bemolMode : note.sharpMode}
        </NoteCell>
      ))}
    </Container>
  )
}
