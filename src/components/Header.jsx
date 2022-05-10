import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Header = () => {

    const { logOut } = useAuth()

    return (
        <header className="py-5 bg-indigo-600">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <h1 className="font-bold text-2xl text-indigo-200 text-center">Administrador de Pacientes de {''} <span className="text-white font-balck">Veterinaria</span>
                </h1>

                <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0'>
                    <Link to="/admin" className='text-white text-xl uppercase font-bold'>Pacientes</Link>
                    <Link to="/admin/profile" className='text-white text-xl uppercase font-bold'>Perfil</Link>

                    <button className='text-white text-xl uppercase font-bold' type='button' onClick={logOut}>Cerrar Sesión</button>
                </nav>
            </div>
        </header>
    )
}

export default Header