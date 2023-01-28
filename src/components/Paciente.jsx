import usePacientes from "../hooks/usePacientes";

const Paciente = ({ paciente }) => {

    const { setEdition, eliminarPaciente } = usePacientes()

    const { email, fecha, nombre, propietario, sintomas, _id } = paciente


    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-CO', { dateStyle: 'long' }).format(nuevaFecha)
    }

    return (

        <div className="mx-5 my-10 bg-white shadow-lg px-5 py-10 rounded-xl">

            <p className="font-bold uppercase text-indigo-800 my-3">Nombre: { '' }
                <span className="font-normal normal-case text-black">{ nombre }</span>
            </p>

            <p className="font-bold uppercase text-indigo-800 my-3">Propietario: { '' }
                <span className="font-normal normal-case text-black">{ propietario }</span>
            </p>

            <p className="font-bold uppercase text-indigo-800 my-3">Email de Contacto: { '' }
                <span className="font-normal normal-case text-black">{ email }</span>
            </p>

            <p className="font-bold uppercase text-indigo-800 my-3">Fecha de Alta: { '' }
                <span className="font-normal normal-case text-black">{ formatearFecha(fecha) }</span>
            </p>

            <p className="font-bold uppercase text-indigo-800 my-3">Síntomas: { '' }
                <span className="font-normal normal-case text-black">{ sintomas }</span>
            </p>

            <div className="flex justify-around my-2">

                <button type="button" className="py-2 px-10 mt-5 bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold rounded-2xl"
                    onClick={ () => setEdition(paciente) }
                >Editar</button>

                <button type="button" className="py-2 px-10 mt-5 bg-red-500 hover:bg-red-700 text-white uppercase font-bold rounded-2xl"
                    onClick={ () => eliminarPaciente(_id) }
                >Eliminar</button>

            </div>

        </div>
    )
}

export default Paciente