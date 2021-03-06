/* eslint-disable import/named */

import styled, {css, DefaultTheme, StyledComponent} from 'styled-components'
import {Card, rem, Theme} from '@sanity/ui'
import {fileTarget} from '../../common/fileTarget'
import {focusRingBorderStyle, focusRingStyle} from './focusringUtils'

export type {FileInfo} from '../../common/fileTarget'

export const FileTarget = styled(fileTarget(Card))(({theme}: {theme: Theme}) => {
  const border = {width: 1, color: 'var(--card-border-color)'}

  return css`
    --card-focus-box-shadow: ${focusRingBorderStyle(border)};

    border-radius: ${rem(theme.sanity.radius[1])};
    outline: none;
    box-shadow: var(--card-focus-box-shadow);

    &:focus {
      --card-focus-box-shadow: ${focusRingStyle({
        base: theme.sanity.color.base,
        border,
        focusRing: theme.sanity.focusRing,
      })};
    }
  `
})

export const Overlay: StyledComponent<'div', DefaultTheme> = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--card-bg-color);
  z-index: 3;
  pointer-events: none;
`
