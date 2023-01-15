import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.secondary[200]};
`

export const Banner = styled.section`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 48px 24px;
  background-color: ${({ theme }) => theme.colors.secondary[100]};

  h1 {
    font-size: 32px;

    span {
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.secondary[700]};
  }
`

export const MusicalSection = styled.section`
  width: 100%;
  display: flex;

  &:nth-child(2) {
    flex-direction: row-reverse;
    background-color: ${({ theme }) => theme.colors.secondary[100]};

    @media (max-width: 769px) {
      flex-direction: column;
      gap: 32px;
    }
  }

  @media (max-width: 769px) {
    flex-direction: column;
    gap: 32px;
  }

  align-items: center;
  justify-content: center;
  padding: 64px 24px;

  img {
    width: 200px;
    height: 200px;

    @media (max-width: 769px) {
      width: 160px;
      height: 160px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    width: 45%;

    @media (max-width: 769px) {
      width: 60%;
    }

    @media (max-width: 545px) {
      width: 100%;
    }

    h2 {
      font-size: 28px;
      color: ${({ theme }) => theme.colors.primary[500]};
    }

    p {
      text-align: justify;
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    padding: 32px;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.secondary[900]};
  }
`

export const LinkButton = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 24px;
  margin-top: 12px;
  border: 1px transparent;
  border-radius: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary[100]};
  background-color: ${({ theme }) => theme.colors.primary[500]};
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`

export const ArrowLeft = styled(ArrowSmallRightIcon)`
  width: 16px;
`
