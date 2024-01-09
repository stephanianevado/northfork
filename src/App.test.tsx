import { render, screen } from '@testing-library/react'

import { App } from 'src/App'
import { TodoPage } from 'src/pages/TodoPage'
import { RenderWithTheme } from 'src/utils/RenderWithTheme'

test('renders landing page', () => {
  render(
    <RenderWithTheme>
      <App />
    </RenderWithTheme>
  )
  const linkElement = screen.getByText(/Northfork Frontend Todo App/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders todo page', () => {
  render(
    <RenderWithTheme>
      <TodoPage />
    </RenderWithTheme>
  )
  const linkElement = screen.getByText(/Your Todo's/i)
  expect(linkElement).toBeInTheDocument()
})
