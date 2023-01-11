import React from 'react'
import { SwitchRoot, SwitchThumb } from './styles'

interface SwitchPrimitiveProps {
  checked: boolean
  toogleConfig: () => void
}

export const SwitchPrimitive: React.FC<SwitchPrimitiveProps> = ({
  checked,
  toogleConfig
}) => {
  return (
    <SwitchRoot checked={checked} onClick={toogleConfig}>
      <SwitchThumb />
    </SwitchRoot>
  )
}
