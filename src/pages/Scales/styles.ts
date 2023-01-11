import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export const ArrowLeft = styled(ArrowLeftIcon)`
  width: 12px;
  color: ${({ theme }) => theme.colors.secondary[800]};
`

export const BackPageLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary[900]};
  }
`

export const Chevron = styled(ChevronRightIcon)`
  width: 16px;
  color: ${({ theme }) => theme.colors.secondary[800]};
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.secondary[200]};

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 0 32px;
    margin-bottom: 48px;

    main {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;

      @media (max-width: 769px) {
        flex-direction: column;
      }

      gap: 24px;
      margin-top: 16px;
    }
  }
`

export const LinkCard = styled(Link)`
  cursor: pointer;
  width: 49%;
  padding: 12px 20px;
  background: ${({ theme }) => theme.colors.secondary[100]};
  box-shadow: ${({ theme }) => theme.colors.secondary[900]} 4px 4px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.025);
    background: ${({ theme }) => theme.colors.primary[400]};
    box-shadow: ${({ theme }) => theme.colors.secondary[900]} 2px 2px;

    h2 {
      color: ${({ theme }) => theme.colors.secondary[100]};
    }

    p {
      color: ${({ theme }) => theme.colors.secondary[100]};
    }
  }

  @media (max-width: 769px) {
    width: 100%;
  }

  h2 {
    margin-bottom: 2px;
    color: ${({ theme }) => theme.colors.primary[500]};
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.secondary[700]};
  }
`

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 32px;

  div {
    display: flex;
    gap: 4px;
    align-items: center;

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.secondary[800]};

      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.secondary[900]};
      }
    }
  }
`
