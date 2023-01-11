import React from 'react'
import { Cell } from './styles'

interface NoteCellProps {
  changeNote: () => void
  children: React.ReactNode
}

export const NoteCell: React.FC<NoteCellProps> = ({ changeNote, children }) => {
  return <Cell onClick={() => changeNote()}>{children}</Cell>
}
