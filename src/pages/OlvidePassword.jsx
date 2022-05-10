import { useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta'

const OlvidePassword = () => {
    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email === '' || email.length < 6) {
            setAlerta({ msg: 'El email es requerido', error: true })
            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/olvide-password', {
                email
            })
            console.log(data);
            setAlerta({ msg: data.msg })
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
                <h1 className="text-indigo-600 font-black text-6xl">Recupera tu cuenta y Administra tus <span className="text-black">Pacientes</span></h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-10 py-5 rounded-xl bg-white'>

                {msg && <Alerta alerta={alerta} />}

                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Email
                        </label>
                        <input
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            type="email" placeholder="Correo Electrónico"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <input type="submit" value="Enviar Instrucciones" className="bg-indigo-700 w-full py-3 px-5 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />

                </form>

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link className='block text-center my-5 text-gray-500 hover:text-gray-700' to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
                    <Link className='block text-center my-5 text-gray-500 hover:text-gray-700' to="/registro">¿No tienes una cuenta? Regístrate</Link>
                </nav>

            </div>
        </>
    )
}

export default OlvidePassword