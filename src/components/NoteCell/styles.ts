import styled from 'styled-components'

export const Cell = styled.button`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.primary[400]};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary[700]};
  box-shadow: ${({ theme }) => theme.colors.secondary[900]} 4px 4px;
  font-size: 18px;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[400]};
    color: ${({ theme }) => theme.colors.secondary[100]};
  }
`
