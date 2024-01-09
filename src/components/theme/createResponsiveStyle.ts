import { Breakpoint, BreakpointStyles } from 'src/components/theme/breakpoint'
import { propToCSSMap } from 'src/components/theme/propToCSSMap'
import { Theme } from 'src/components/theme/Theme'

export const createResponsiveStyle = (
  breakpoints?: Record<string, BreakpointStyles>
) => {
  if (!breakpoints) return null

  // Map over each breakpoint and generate responsive styles
  return Object.keys(breakpoints)
    .map((breakpoint) => {
      const breakpointStyles = breakpoints[breakpoint]

      return `
        ${Theme.breakpoints[breakpoint as Breakpoint]} {
          ${Object.keys(breakpointStyles)
            .map((prop) => {
              const cssProperty = propToCSSMap[prop] || prop

              return `${cssProperty}: ${breakpointStyles[prop]};`
            })
            .join(' ')}
        }
      `
    })
    .join('')
}
