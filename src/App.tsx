import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AppWrapper } from 'src/components/AppWrapper'
import { HomePage } from 'src/pages/HomePage'
import { TodoPage } from 'src/pages/TodoPage'

export const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </AppWrapper>
    </Router>
  )
}
