import React, { useState } from 'react'
import { Note, useMusical } from '../../contexts/MusicalContext'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { TonesContainer } from '../../components/TonesContainer'
import { SwitchPrimitive } from '../../primitives/Switch'

import {
  ArrowLeft,
  BackPageLink,
  Chevron,
  Container,
  Navigation,
  ScaleContainer,
  ScaleWrapper,
  SwitchWrapper,
  ToneInfoContainer
} from './styles'

export const Transpose: React.FC = () => {
  const { CHROMATIC_SCALE, bemolMode, setBemolMode } = useMusical()
  const [identityNote, setIdentityNote] = useState<number>(0)

  function handleIdentityNoteChange(tone: number) {
    setIdentityNote(tone)
  }

  const chromaticScale: Note[] = [
    ...CHROMATIC_SCALE.slice(identityNote, CHROMATIC_SCALE.length),
    ...CHROMATIC_SCALE.slice(0, identityNote)
  ]

  const transpositionFromC = [
    { note: chromaticScale[0] },
    { note: chromaticScale[9] },
    { note: chromaticScale[2] }
  ]

  const transpositionFromEb = [
    { note: chromaticScale[0] },
    { note: chromaticScale[3] },
    { note: chromaticScale[5] }
  ]

  const transpositionFromBb = [
    { note: chromaticScale[0] },
    { note: chromaticScale[7] },
    { note: chromaticScale[10] }
  ]

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
          <Link to="/transpose">Transpor</Link>
        </div>
      </Navigation>

      <div>
        <div>
          <h1>Transpor</h1>
          <p>
            A transposição serve para ajustar a altura das notas de determinado
            instrumento em relação a outros. Aqui serão trabalhados os
            instrumento afinado em C (Dó), E♭ (Mi bemol) e B♭ (Si bemol).
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
          <h2>Nota Atual</h2>
          <span>
            {bemolMode
              ? chromaticScale[0].bemolMode
              : chromaticScale[0].sharpMode}
          </span>
        </ToneInfoContainer>

        <TonesContainer
          scale={CHROMATIC_SCALE}
          bemolMode={bemolMode}
          changeIdentityNote={handleIdentityNoteChange}
        />

        <ScaleWrapper>
          <h3>Partindo de C</h3>
          <ScaleContainer>
            <ul>
              <li>
                C:{'  '}
                {bemolMode
                  ? transpositionFromC[0].note.bemolMode
                  : transpositionFromC[0].note.sharpMode}
              </li>
              <li>
                E♭:{'  '}
                {bemolMode
                  ? transpositionFromC[1].note.bemolMode
                  : transpositionFromC[1].note.sharpMode}
              </li>
              <li>
                B♭:{'  '}
                {bemolMode
                  ? transpositionFromC[2].note.bemolMode
                  : transpositionFromC[2].note.sharpMode}
              </li>
            </ul>
          </ScaleContainer>
        </ScaleWrapper>

        <ScaleWrapper>
          <h3>Partindo de E♭</h3>
          <ScaleContainer>
            <ul>
              <li>
                C:{'  '}
                {bemolMode
                  ? transpositionFromEb[0].note.bemolMode
                  : transpositionFromEb[0].note.sharpMode}
              </li>
              <li>
                E♭:{'  '}
                {bemolMode
                  ? transpositionFromEb[1].note.bemolMode
                  : transpositionFromEb[1].note.sharpMode}
              </li>
              <li>
                B♭:{'  '}
                {bemolMode
                  ? transpositionFromEb[2].note.bemolMode
                  : transpositionFromEb[2].note.sharpMode}
              </li>
            </ul>
          </ScaleContainer>
        </ScaleWrapper>

        <ScaleWrapper>
          <h3>Partindo de B♭</h3>
          <ScaleContainer>
            <ul>
              <li>
                B♭:{'  '}
                {bemolMode
                  ? transpositionFromBb[0].note.bemolMode
                  : transpositionFromBb[0].note.sharpMode}
              </li>
              <li>
                E♭:{'  '}
                {bemolMode
                  ? transpositionFromBb[1].note.bemolMode
                  : transpositionFromBb[1].note.sharpMode}
              </li>
              <li>
                C:{'  '}
                {bemolMode
                  ? transpositionFromBb[2].note.bemolMode
                  : transpositionFromBb[2].note.sharpMode}
              </li>
            </ul>
          </ScaleContainer>
        </ScaleWrapper>
      </main>
    </Container>
  )
}
