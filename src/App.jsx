import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import RouteProtected from './layout/RouteProtected'

import Login from './pages/Login'
import ConfirmarCuenta from './pages/ConfirmarCuenta'
import Registro from './pages/Registro'
import OlvidePassword from './pages/OlvidePassword'
import NewPassword from './pages/NewPassword'
import AdministrarPacientes from './pages/AdministrarPacientes'
import EditProfile from './pages/EditProfile'
import ChangePassword from './pages/ChangePassword'


import { AuthProvider } from './context/AuthProvider'
import { PacientesProvider } from './context/PacientesProvider'

function App () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>

            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registro" element={<Registro />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NewPassword />} />
            </Route>
            <Route path="/admin" element={<RouteProtected />}>
              <Route index element={<AdministrarPacientes />} />
              <Route path='profile' element={<EditProfile />} />
              <Route path='change-password' element={<ChangePassword />} />
            </Route>

          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
