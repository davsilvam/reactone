import React from 'react'

import { Header } from '../../components/Header'
import composition from '../../assets/composition.svg'

import {
  ArrowLeft,
  Banner,
  Container,
  ImageWrapper,
  LinkButton,
  MusicalSection
} from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner>
        <h1>
          Descomplicando a música com o <span>Reactone</span>!
        </h1>
        <p>
          O Reactone oferece funcionalidades para ajudar você, músico, na hora
          de compor e tocar seu instrumento.
        </p>
      </Banner>

      <main>
        <MusicalSection>
          <ImageWrapper>
            <div>
              <img src={composition} alt="Man with a guitar illustration." />
            </div>
          </ImageWrapper>
          <div>
            <h2>Escalas</h2>
            <p>
              Dificuldade com escalas? Seus problemas acabaram! Consulte a seção
              de escalas e consiga a ideal para suas composições. Escolha entre
              as Diatônicas, Harmônicas e Pentatônicas. Nosso sistema te ajuda
              mostrando as escalas com base na nota inicial.
            </p>
            <LinkButton to="/scales">
              Ir para Escalas <ArrowLeft />
            </LinkButton>
          </div>
        </MusicalSection>
      </main>
    </Container>
  )
}