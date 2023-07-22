import Paciente from "./Paciente"
const List = ({pacientes, setPaciente, deletePatient}) => {
  return (
    <div className="md:w-3/5 lg:w-1/2">
      {
        pacientes && pacientes.length ? (
          <>
          <h2 className="text-center font-bold">Listado de pacientes</h2>
      <div className="px-2 py-2 md:h-screen md:overflow-y-scroll ">
        {
          pacientes.map(paciente=>{
            return (<Paciente paciente={paciente} deletePatient= {deletePatient} setPaciente= {setPaciente} key={paciente.id}/>)
          })
        }
      </div></>
        ):(
          <>
          <h2 className="p">Listado de pacientes {" "} </h2>
          <p className="p text-red-500">Debes agregar nuevos pacientes</p>
          
          </>
        )
      }
    </div>
  )
}

export default List