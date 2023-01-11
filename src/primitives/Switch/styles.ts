import { Root, Thumb } from '@radix-ui/react-switch'
import styled from 'styled-components'

export const SwitchRoot = styled(Root)`
  all: unset;
  cursor: pointer;
  position: relative;
  width: 42px;
  height: 21px;
  opacity: 50%;
  border-radius: 9999px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: ${({ theme }) => theme.colors.secondary[500]};

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`

export const SwitchThumb = styled(Thumb)`
  display: block;
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(21px);
  }
`
