import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary[900]};

  img {
    width: 100px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`
