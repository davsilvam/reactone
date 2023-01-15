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
  padding-bottom: 64px;
  background-color: ${({ theme }) => theme.colors.secondary[200]};

  & > div {
    width: 100%;
    display: flex;

    @media (max-width: 769px) {
      flex-direction: column;
    }

    justify-content: space-between;
    align-items: flex-start;
    padding: 0 32px;
    margin-bottom: 24px;

    > div {
      max-width: 50%;

      @media (max-width: 769px) {
        max-width: 100%;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;

      p {
        color: ${({ theme }) => theme.colors.secondary[700]};
        margin-bottom: 12px;
      }
    }
  }

  & > main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 0 32px;
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

export const ScaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;

    li {
      width: 92px;
      padding: 6px 12px;
      border: 2px solid ${({ theme }) => theme.colors.secondary[100]};
      border-radius: 12px;
      font-size: 14px;
      background-color: ${({ theme }) => theme.colors.secondary[100]};

      &.addable {
        cursor: pointer;
        border: 2px dashed ${({ theme }) => theme.colors.secondary[900]};
        background-color: transparent;
      }
    }
  }
`

export const ScaleWrapper = styled.section`
  max-width: 1020px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const ToneInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  span {
    font-weight: 800;
    font-size: 80px;
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`

export const SwitchWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  p {
    font-size: 14px;
  }
`
