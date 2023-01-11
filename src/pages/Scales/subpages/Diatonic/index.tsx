import React, { useState } from 'react'
import { Note, useMusical } from '../../../../contexts/MusicalContext'
import { Link } from 'react-router-dom'

import { Header } from '../../../../components/Header'
import { TonesContainer } from '../../../../components/TonesContainer'
import { SwitchPrimitive } from '../../../../primitives/Switch'

import {
  Container,
  ScaleContainer,
  SwitchWrapper,
  ToneInfoContainer
} from './styles'
import { ArrowLeft, BackPageLink, Chevron, Navigation } from '../../styles'

export const Diatonic: React.FC = () => {
  const { CHROMATIC_SCALE, bemolMode, setBemolMode } = useMusical()
  const [identityNote, setIdentityNote] = useState<number>(0)

  function handleIdentityNoteChange(tone: number) {
    setIdentityNote(tone)
  }

  const chromaticScale: Note[] = [
    ...CHROMATIC_SCALE.slice(identityNote, CHROMATIC_SCALE.length),
    ...CHROMATIC_SCALE.slice(0, identityNote)
  ]

  const majorScale: Note[] = [
    chromaticScale[0],
    chromaticScale[2],
    chromaticScale[4],
    chromaticScale[5],
    chromaticScale[7],
    chromaticScale[9],
    chromaticScale[11]
  ]

  const minorScale: Note[] = [
    chromaticScale[0],
    chromaticScale[2],
    chromaticScale[3],
    chromaticScale[5],
    chromaticScale[7],
    chromaticScale[8],
    chromaticScale[10]
  ]

  return (
    <Container>
      <Header />

      <Navigation>
        <BackPageLink to="/scales">
          <ArrowLeft />
          Voltar
        </BackPageLink>
        <div>
          <Link to="/">Início</Link>
          <Chevron />
          <Link to="/scales">Escalas</Link>
          <Chevron />
          <Link to="/scales/diatonic">Diatônicas</Link>
        </div>
      </Navigation>

      <div>
        <div>
          <h1>Escalas Diatônicas</h1>
          <p>
            As escalas diatônicas são formadas por 7 notas, com 5 intervalos de
            tons e 2 de semitons até a próxima oitava.
          </p>
        </div>

        <SwitchWrapper>
          <p>Modo bemol</p>
          <SwitchPrimitive
            toogleConfig={() => setBemolMode(!bemolMode)}
            checked={bemolMode}
          />
        </SwitchWrapper>
      </div>
      <main>
        <ToneInfoContainer>
          <h2>Escala Atual</h2>
          <span>
            {bemolMode
              ? chromaticScale[0].bemolMode
              : chromaticScale[0].sharpMode}
          </span>
        </ToneInfoContainer>

        <TonesContainer
          bemolMode={bemolMode}
          changeIdentityNote={handleIdentityNoteChange}
        />

        <section>
          <ScaleContainer>
            <h3>Escala Maior</h3>
            <ul>
              {majorScale?.map((note, index) => (
                <li key={note.id}>
                  {index + 1}º - {bemolMode ? note.bemolMode : note.sharpMode}
                </li>
              ))}
            </ul>
          </ScaleContainer>

          <ScaleContainer>
            <h3>Escala Menor</h3>
            <ul>
              {minorScale?.map((note, index) => (
                <li key={note.id}>
                  {index + 1}º - {bemolMode ? note.bemolMode : note.sharpMode}
                </li>
              ))}
            </ul>
          </ScaleContainer>
        </section>
      </main>
    </Container>
  )
}
