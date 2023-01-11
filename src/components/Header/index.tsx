import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

import { Container } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Reactone logo." />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/scales">Escalas</Link>
        </li>
        <li>
          <Link to="/chords">Acordes</Link>
        </li>
        <li>
          <Link to="/transpose">Transpor</Link>
        </li>
      </ul>
    </Container>
  )
}
