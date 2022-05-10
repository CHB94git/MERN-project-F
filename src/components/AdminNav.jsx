import { Link } from 'react-router-dom'

const AdminNav = () => {
    return (
        <nav className='flex gap-4 mb-1'>
            <Link to='/admin/profile'
                className='font-bold uppercase text-gray-400 hover:text-gray-600'
            >Perfil</Link>

            <Link to='/admin/change-password'
                className='font-bold uppercase text-gray-400 hover:text-gray-600'
            >Cambiar Contraseña</Link>
        </nav>
    )
}

export default AdminNav