import { useState } from "react"
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import useAuth from "../hooks/useAuth"


const ChangePassword = () => {

    const { saveNewPassword } = useAuth()

    const [alerta, setAlerta] = useState({})
    const [password, setPassword] = useState({
        actual_pwd: '',
        new_pwd: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()

        if (Object.values(password).some(field => field === '')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 4000);
            return
        }

        if (password.new_pwd.length < 6) {
            setAlerta({
                msg: 'La nueva contraseña debe tener mínimo 6 caracteres',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 5000);
            return
        }

        const respuesta = await saveNewPassword(password)

        setAlerta(respuesta)

        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }

    const { msg } = alerta

    return (
        <>
            <AdminNav />

            <hr />

            <h2 className="font-black text-3xl text-center mt-10">Cambiar Contraseña</h2>

            <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''} <span className="text-indigo-600 font-bold">Contraseña aquí</span> </p>

            <div className="flex justify-center">
                <div className="w-full md:w-1/2 shadow rounded-lg p-5">

                    {msg && <Alerta alerta={alerta} />}

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="my-3">
                            <label htmlFor="actual_pwd" className="uppercase font-bold text-gray-600">Contraseña Actual</label>
                            <input type="password" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="actual_pwd" id="actual_pwd" placeholder="Escribe tu contraseña actual" onChange={e => setPassword({
                                ...password,
                                [e.target.name]: e.target.value
                            })} />
                        </div>

                        <div className="my-3">
                            <label htmlFor="new_pwd" className="uppercase font-bold text-gray-600">Nueva Contraseña</label>
                            <input type="password" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="new_pwd" id="new_pwd" placeholder="Ingresa la nueva contraseña" onChange={e => setPassword({
                                ...password,
                                [e.target.name]: e.target.value
                            })} />
                        </div>

                        <input type="submit" value="Actualizar Contraseña" className="bg-indigo-700 hover:bg-indigo-900 px-10 py-3 font-bold text-white rounded-xl uppercase w-full mt-5" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword