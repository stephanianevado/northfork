import styled from 'styled-components'

import { Theme } from 'src/components/theme/Theme'

const {
  colors: { tertiaryPink, secondaryBlack, tertiaryGrey },
} = Theme

export const Checkbox = styled.input`
  margin-right: 8px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid ${secondaryBlack};
  border-radius: 25%;
  outline: none;
  cursor: pointer;
  background-color: ${tertiaryGrey};
  &:checked {
    background-color: ${tertiaryPink};
    border-color: ${secondaryBlack};
  }
`
