import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Layout } from './layout'
import { Inicio } from './pages/inicio'
import { Sobre } from './pages/sobre'
import { Cursos } from './pages/cursos'
import { Linguagens } from './pages/linguagens'
import { Projetos } from './pages/projetos'
import { Page404 } from './pages/Page404'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/linguagens" element={<Linguagens />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
