import styled from 'styled-components'

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

    div {
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

    section:not(:nth-child(2)) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      &:nth-child(3) {
        gap: 32px;
      }
    }
  }
`

export const SwitchWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
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
    gap: 8px;

    li {
      width: 92px;
      padding: 6px 12px;
      border: 1px transparent;
      border-radius: 12px;
      font-size: 14px;
      background-color: ${({ theme }) => theme.colors.secondary[100]};
    }
  }
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
