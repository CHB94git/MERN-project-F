import { useState, useEffect } from 'react'
import Alerta from './Alerta'
import usePacientes from '../hooks/usePacientes'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const { guardarPaciente, paciente } = usePacientes()

    useEffect(() => {

        if (paciente?.nombre) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }

    }, [paciente])

    const handleSubmit = e => {
        e.preventDefault()

        // Validar el formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son requeridos',
                error: true
            })
            return
        }

        setAlerta({})

        guardarPaciente({
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            id
        })

        setAlerta({
            msg: 'Guardado correctamente'
        })

        // Limpiar inputs 
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')

        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }

    const { msg } = alerta

    return (
        <>
            <h2 className="font-black text-3xl text-center">Administrador de pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center">Agrega tus pacientes {''} <span className="text-indigo-600 font-bold">y Adminístralos</span> </p>

            <form onSubmit={handleSubmit} className="bg-white py-10 px-5 mb-10 lg:mb-5 rounded-xl shadow-lg"
            >
                <div className="mb-5">
                    <label className="uppercase font-bold text-gray-700" htmlFor="nombre">Mascota</label>

                    <input className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-300" type="text" id="nombre" placeholder="Nombre mascota"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="uppercase font-bold text-gray-700" htmlFor="propietario">Propietario</label>

                    <input className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-300" type="text" id="propietario" placeholder="Nombre propietario" value={propietario}
                        onChange={e => setPropietario(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label className="uppercase font-bold text-gray-700" htmlFor="email">Email</label>

                    <input className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-300" type="email" id="email" placeholder="Correo Electrónico" value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label className="uppercase font-bold text-gray-700" htmlFor="fecha">Fecha de Alta</label>

                    <input className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-300" type="date" id="fecha" value={fecha}
                        onChange={e => setFecha(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label className="uppercase font-bold text-gray-700" htmlFor="sintomas">Síntomas</label>

                    <textarea className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-300" id="sintomas" placeholder="Descripción de síntomas de la mascota" value={sintomas}
                        onChange={e => setSintomas(e.target.value)} />
                </div>

                <input className="bg-indigo-600 w-full rounded-md p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors" type="submit" value={id ? "Guardar cambios" : "Agregar Paciente"} />


            </form>

            {msg && <Alerta alerta={alerta} />}
        </>
    )
}

export default Formulario