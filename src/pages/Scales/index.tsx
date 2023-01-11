import React from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'

import {
  ArrowLeft,
  BackPageLink,
  Chevron,
  Container,
  LinkCard,
  Navigation
} from './styles'

export const Scales: React.FC = () => {
  return (
    <Container>
      <Header />

      <Navigation>
        <BackPageLink to="/">
          <ArrowLeft />
          Voltar
        </BackPageLink>
        <div>
          <Link to="/">Início</Link>
          <Chevron />
          <Link to="/scales">Escalas</Link>
        </div>
      </Navigation>

      <div>
        <h1>Escalas</h1>
        <main>
          <LinkCard to="/scales/diatonic">
            <h2>Escalas Diatônicas</h2>
            <p>
              As escalas diatônicas são formadas por 7 notas, com 5 intervalos
              de tons e 2 de semitons até a próxima oitava.
            </p>
          </LinkCard>

          <LinkCard to="/scales/harmonic">
            <h2>Escalas Harmônicas</h2>
            <p>
              As escalas melódicas são formadas por 7 notas, diminuindo meio tom
              da 6ª das escalas menores.
            </p>
          </LinkCard>

          <LinkCard to="/scales/pentatonic">
            <h2>Escalas Pentatônicas</h2>
            <p>
              As escalas pentatônicas são formadas por 5 notas, retirando o 4º e
              7º grau de escalas maiores e o 2º e 6º para as menores.
            </p>
          </LinkCard>
        </main>
      </div>
    </Container>
  )
}
