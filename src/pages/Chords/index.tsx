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
  SwitchContainer,
  SwitchWrapper,
  ToneInfoContainer
} from './styles'

export const Chords: React.FC = () => {
  const { CHROMATIC_SCALE, LETTERS_CHROMATIC_SCALE, bemolMode, setBemolMode } =
    useMusical()
  const [showWithSeventhChords, setShowWithSeventhChords] = useState(false)
  const [showWithNinthChords, setShowWithNinthChords] = useState(false)
  const [identityNote, setIdentityNote] = useState<number>(0)

  function handleIdentityNoteChange(tone: number) {
    setIdentityNote(tone)
  }

  const chromaticScale: Note[] = [
    ...CHROMATIC_SCALE.slice(identityNote, CHROMATIC_SCALE.length),
    ...CHROMATIC_SCALE.slice(0, identityNote)
  ]

  const chromaticLetterScale: Note[] = [
    ...LETTERS_CHROMATIC_SCALE.slice(
      identityNote,
      LETTERS_CHROMATIC_SCALE.length
    ),
    ...LETTERS_CHROMATIC_SCALE.slice(0, identityNote)
  ]

  const majorChord = [
    { note: chromaticScale[0], tone: '1' },
    { note: chromaticScale[4], tone: '3' },
    { note: chromaticScale[7], tone: '5' }
  ]

  const minorChord = [
    { note: chromaticScale[0], tone: '1' },
    { note: chromaticScale[3], tone: '3' },
    { note: chromaticScale[7], tone: '5' }
  ]

  const majorChordWithSeventh = [
    { note: chromaticScale[0], tone: '1' },
    { note: chromaticScale[4], tone: '3' },
    { note: chromaticScale[7], tone: '5' },
    { note: chromaticScale[11], tone: '7' }
  ]

  const minorChordWithSeventh = [
    { note: chromaticScale[0], tone: '1' },
    { note: chromaticScale[3], tone: '3' },
    { note: chromaticScale[7], tone: '5' },
    { note: chromaticScale[11], tone: '7' }
  ]

  const majorChordWithSeventhMinor = [
    { note: chromaticScale[0], tone: '1' },
    { note: chromaticScale[4], tone: '3' },
    { note: chromaticScale[7], tone: '5' },
    { note: chromaticScale[10], tone: '7' }
  ]

  const minorChordWithSeventhMinor = [
    { note: chromaticScale[0], tone: '1' },
    { note: chromaticScale[3], tone: '3' },
    { note: chromaticScale[7], tone: '5' },
    { note: chromaticScale[10], tone: '7' }
  ]

  const majorChordWithNinth = [
    { note: chromaticScale[0], tone: '1' },
    { note: chromaticScale[4], tone: '3' },
    { note: chromaticScale[7], tone: '5' },
    { note: chromaticScale[2], tone: '9' }
  ]

  const minorChordWithNinth = [
    { note: chromaticScale[0], tone: '1' },
    { note: chromaticScale[3], tone: '3' },
    { note: chromaticScale[7], tone: '5' },
    { note: chromaticScale[2], tone: '9' }
  ]

  const majorChordWithSeventhAndNinth = [
    { note: chromaticScale[0], tone: '1' },
    { note: chromaticScale[4], tone: '3' },
    { note: chromaticScale[7], tone: '5' },
    { note: chromaticScale[11], tone: '7' },
    { note: chromaticScale[2], tone: '9' }
  ]

  const minorChordWithSeventhAndNinth = [
    { note: chromaticScale[0], tone: '1' },
    { note: chromaticScale[3], tone: '3' },
    { note: chromaticScale[7], tone: '5' },
    { note: chromaticScale[11], tone: '7' },
    { note: chromaticScale[2], tone: '9' }
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
          <Link to="/chords">Acordes</Link>
        </div>
      </Navigation>

      <div>
        <div>
          <h1>Acordes</h1>
          <p>
            Os acordes são conjuntos harmônicos de três ou mais ouvidas ao mesmo
            tempo, criando uma harmonia.
          </p>
        </div>

        <SwitchContainer>
          <SwitchWrapper>
            <p>Modo bemol</p>
            <SwitchPrimitive
              toogleConfig={() => setBemolMode(!bemolMode)}
              checked={bemolMode}
            />
          </SwitchWrapper>
          <SwitchWrapper>
            <p>Mostrar acordes com 7ª</p>
            <SwitchPrimitive
              toogleConfig={() =>
                setShowWithSeventhChords(!showWithSeventhChords)
              }
              checked={showWithSeventhChords}
            />
          </SwitchWrapper>
          <SwitchWrapper>
            <p>Mostrar acordes com 9ª</p>
            <SwitchPrimitive
              toogleConfig={() => setShowWithNinthChords(!showWithNinthChords)}
              checked={showWithNinthChords}
            />
          </SwitchWrapper>
        </SwitchContainer>
      </div>
      <main>
        <ToneInfoContainer>
          <h2>Acordes de</h2>
          <span>
            {bemolMode
              ? chromaticLetterScale[0].bemolMode
              : chromaticLetterScale[0].sharpMode}
          </span>
        </ToneInfoContainer>

        <TonesContainer
          scale={LETTERS_CHROMATIC_SCALE}
          bemolMode={bemolMode}
          changeIdentityNote={handleIdentityNoteChange}
        />

        <section>
          <ScaleContainer>
            <h3>
              {bemolMode
                ? chromaticLetterScale[0].bemolMode
                : chromaticLetterScale[0].sharpMode}{' '}
              -{' '}
              {bemolMode
                ? chromaticScale[0].bemolMode
                : chromaticScale[0].sharpMode}{' '}
              maior
            </h3>
            <ul>
              {majorChord?.map(chordComponent => (
                <li key={chordComponent.note.id}>
                  {chordComponent.tone} -{' '}
                  {bemolMode
                    ? chordComponent.note.bemolMode
                    : chordComponent.note.sharpMode}
                </li>
              ))}
            </ul>
          </ScaleContainer>

          <ScaleContainer>
            <h3>
              {bemolMode
                ? chromaticLetterScale[0].bemolMode
                : chromaticLetterScale[0].sharpMode}
              m -{' '}
              {bemolMode
                ? chromaticScale[0].bemolMode
                : chromaticScale[0].sharpMode}{' '}
              menor
            </h3>
            <ul>
              {minorChord?.map(chordComponent => (
                <li key={chordComponent.note.id}>
                  {chordComponent.tone} -{' '}
                  {bemolMode
                    ? chordComponent.note.bemolMode
                    : chordComponent.note.sharpMode}
                </li>
              ))}
            </ul>
          </ScaleContainer>

          {showWithSeventhChords && (
            <>
              <ScaleContainer>
                <h3>
                  {bemolMode
                    ? chromaticLetterScale[0].bemolMode
                    : chromaticLetterScale[0].sharpMode}
                  7M -{' '}
                  {bemolMode
                    ? chromaticScale[0].bemolMode
                    : chromaticScale[0].sharpMode}{' '}
                  maior com 7ª
                </h3>
                <ul>
                  {majorChordWithSeventh?.map(chordComponent => (
                    <li key={chordComponent.note.id}>
                      {chordComponent.tone} -{' '}
                      {bemolMode
                        ? chordComponent.note.bemolMode
                        : chordComponent.note.sharpMode}
                    </li>
                  ))}
                </ul>
              </ScaleContainer>

              <ScaleContainer>
                <h3>
                  {bemolMode
                    ? chromaticLetterScale[0].bemolMode
                    : chromaticLetterScale[0].sharpMode}
                  m7M -{' '}
                  {bemolMode
                    ? chromaticScale[0].bemolMode
                    : chromaticScale[0].sharpMode}{' '}
                  menor com 7ª
                </h3>
                <ul>
                  {minorChordWithSeventh?.map(chordComponent => (
                    <li key={chordComponent.note.id}>
                      {chordComponent.tone} -{' '}
                      {bemolMode
                        ? chordComponent.note.bemolMode
                        : chordComponent.note.sharpMode}
                    </li>
                  ))}
                </ul>
              </ScaleContainer>

              <ScaleContainer>
                <h3>
                  {bemolMode
                    ? chromaticLetterScale[0].bemolMode
                    : chromaticLetterScale[0].sharpMode}
                  7 -{' '}
                  {bemolMode
                    ? chromaticScale[0].bemolMode
                    : chromaticScale[0].sharpMode}{' '}
                  maior com 7ª menor
                </h3>
                <ul>
                  {majorChordWithSeventhMinor?.map(chordComponent => (
                    <li key={chordComponent.note.id}>
                      {chordComponent.tone} -{' '}
                      {bemolMode
                        ? chordComponent.note.bemolMode
                        : chordComponent.note.sharpMode}
                    </li>
                  ))}
                </ul>
              </ScaleContainer>

              <ScaleContainer>
                <h3>
                  {bemolMode
                    ? chromaticLetterScale[0].bemolMode
                    : chromaticLetterScale[0].sharpMode}
                  m7M -{' '}
                  {bemolMode
                    ? chromaticScale[0].bemolMode
                    : chromaticScale[0].sharpMode}{' '}
                  menor com 7ª menor
                </h3>
                <ul>
                  {minorChordWithSeventhMinor?.map(chordComponent => (
                    <li key={chordComponent.note.id}>
                      {chordComponent.tone} -{' '}
                      {bemolMode
                        ? chordComponent.note.bemolMode
                        : chordComponent.note.sharpMode}
                    </li>
                  ))}
                </ul>
              </ScaleContainer>
            </>
          )}

          {showWithNinthChords && (
            <>
              <ScaleContainer>
                <h3>
                  {bemolMode
                    ? chromaticLetterScale[0].bemolMode
                    : chromaticLetterScale[0].sharpMode}
                  <sub>add</sub>9 -{' '}
                  {bemolMode
                    ? chromaticScale[0].bemolMode
                    : chromaticScale[0].sharpMode}{' '}
                  maior com 9ª
                </h3>
                <ul>
                  {majorChordWithNinth?.map(chordComponent => (
                    <li key={chordComponent.note.id}>
                      {chordComponent.tone} -{' '}
                      {bemolMode
                        ? chordComponent.note.bemolMode
                        : chordComponent.note.sharpMode}
                    </li>
                  ))}
                </ul>
              </ScaleContainer>

              <ScaleContainer>
                <h3>
                  {bemolMode
                    ? chromaticLetterScale[0].bemolMode
                    : chromaticLetterScale[0].sharpMode}
                  m<sub>add</sub>9 -{' '}
                  {bemolMode
                    ? chromaticScale[0].bemolMode
                    : chromaticScale[0].sharpMode}{' '}
                  menor com 9ª
                </h3>
                <ul>
                  {minorChordWithNinth?.map(chordComponent => (
                    <li key={chordComponent.note.id}>
                      {chordComponent.tone} -{' '}
                      {bemolMode
                        ? chordComponent.note.bemolMode
                        : chordComponent.note.sharpMode}
                    </li>
                  ))}
                </ul>
              </ScaleContainer>

              <ScaleContainer>
                <h3>
                  {bemolMode
                    ? chromaticLetterScale[0].bemolMode
                    : chromaticLetterScale[0].sharpMode}
                  7M(9) -{' '}
                  {bemolMode
                    ? chromaticScale[0].bemolMode
                    : chromaticScale[0].sharpMode}{' '}
                  maior com 7ª e 9ª
                </h3>
                <ul>
                  {majorChordWithSeventhAndNinth?.map(chordComponent => (
                    <li key={chordComponent.note.id}>
                      {chordComponent.tone} -{' '}
                      {bemolMode
                        ? chordComponent.note.bemolMode
                        : chordComponent.note.sharpMode}
                    </li>
                  ))}
                </ul>
              </ScaleContainer>

              <ScaleContainer>
                <h3>
                  {bemolMode
                    ? chromaticLetterScale[0].bemolMode
                    : chromaticLetterScale[0].sharpMode}
                  m7M(9) -{' '}
                  {bemolMode
                    ? chromaticScale[0].bemolMode
                    : chromaticScale[0].sharpMode}{' '}
                  menor com 7ª e 9ª
                </h3>
                <ul>
                  {minorChordWithSeventhAndNinth?.map(chordComponent => (
                    <li key={chordComponent.note.id}>
                      {chordComponent.tone} -{' '}
                      {bemolMode
                        ? chordComponent.note.bemolMode
                        : chordComponent.note.sharpMode}
                    </li>
                  ))}
                </ul>
              </ScaleContainer>
            </>
          )}
        </section>
      </main>
    </Container>
  )
}
