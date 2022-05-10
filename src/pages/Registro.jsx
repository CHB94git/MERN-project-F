import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios'

const Registro = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [alerta, setAlerta] = useState({})


    const handleSubmit = async e => {
        e.preventDefault()

        if ([nombre, email, password, repeatPassword].includes('')) {
            setAlerta({ msg: 'Hay campos vacíos', error: true })
            return
        }

        if (password !== repeatPassword) {
            setAlerta({ msg: 'Las contraseñas no coinciden', error: true })
        }

        if (password.length < 6) {
            setAlerta({ msg: 'Password corto, mínimo debe tener 6 caracteres', error: true })
            return
        }

        setAlerta({})

        // Crear el usuario en la API
        try {
            await clienteAxios.post('/veterinarios', { nombre, email, password })

            setAlerta({
                msg: 'Creado correctamente, revisa tu email',
                error: false
            })
            // Resetear limpiar el formulario después de un registro exitoso
            setNombre('');
            setEmail('');
            setPassword('');
            setRepeatPassword('');

            setTimeout(() => {
                setAlerta({})
            }, 5000);


        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">Crea tu cuenta y Administra tus <span className="text-black">Pacientes</span></h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-10 py-5 rounded-xl bg-white'>

                {msg && <Alerta
                    alerta={alerta}
                />}

                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Nombre
                        </label>
                        <input
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            type="text" placeholder="Tu Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </div>

                    <div className="my-5">
                        <label htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Email
                        </label>
                        <input
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            type="email" placeholder="Correo Electrónico" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="my-5">
                        <label htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Password
                        </label>
                        <input
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="my-5">
                        <label htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            type="password" placeholder="Confirme su Contraseña" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
                    </div>

                    <input type="submit" value="Crear Cuenta" className="bg-indigo-700 w-full py-3 px-5 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />

                </form>

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link className='block text-center my-5 text-gray-500 hover:text-gray-700' to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
                    <Link className='block text-center my-5 text-gray-500 hover:text-gray-700' to="/olvide-password">¿Olvidaste tu contraseña?</Link>
                </nav>

            </div>

        </>
    )
}

export default Registro