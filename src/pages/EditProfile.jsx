import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav"
import useAuth from "../hooks/useAuth"
import Alerta from "../components/Alerta";

const EditProfile = () => {

    const { auth, updateProfile } = useAuth()
    const [profile, setProfile] = useState({})
    const [alerta, setAlerta] = useState({})

    useEffect(() => {
        setProfile(auth)
    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()

        const { nombre, email } = profile

        if ([nombre, email].includes('')) {
            setAlerta({
                msg: 'Nombre y Email son campos obligatorios!',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 4000);
            return
        }
        const resultado = await updateProfile(profile)
        setAlerta(resultado)
    }

    const { msg } = alerta

    return (
        <>
            <AdminNav />

            <hr />

            <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>

            <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''}
                <span className="text-indigo-600 font-bold">Información aquí</span>
            </p>

            <div className="flex justify-center">
                <div className="w-full md:w-1/2 shadow rounded-lg p-5">

                    {msg && <Alerta alerta={alerta} />}

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="my-3">
                            <label htmlFor="nombre" className="uppercase font-bold text-gray-600">Nombre</label>
                            <input type="text" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="nombre" id="nombre" value={profile.nombre || ''} onChange={e => setProfile({
                                ...profile,
                                [e.target.name]: e.target.value
                            })} />
                        </div>

                        <div className="my-3">
                            <label htmlFor="web" className="uppercase font-bold text-gray-600">Sitio Web</label>
                            <input type="text" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="web" id="web" value={profile.web || ''} onChange={e => setProfile({
                                ...profile,
                                [e.target.name]: e.target.value
                            })} />
                        </div>

                        <div className="my-3">
                            <label htmlFor="telefono" className="uppercase font-bold text-gray-600">Teléfono</label>
                            <input type="text" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="telefono" id="telefono" value={profile.telefono || ''} onChange={e => setProfile({
                                ...profile,
                                [e.target.name]: e.target.value
                            })} />
                        </div>

                        <div className="my-3">
                            <label htmlFor="email" className="uppercase font-bold text-gray-600">Email</label>
                            <input type="email" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="email" id="email" value={profile.email || ''} onChange={e => setProfile({
                                ...profile,
                                [e.target.name]: e.target.value
                            })} />
                        </div>

                        <input type="submit" value="Guardar Cambios" className="bg-indigo-700 hover:bg-indigo-900 px-10 py-3 font-bold text-white rounded-xl uppercase w-full mt-5" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditProfile