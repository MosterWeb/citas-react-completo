/* eslint-disable react/prop-types */
import { Fragment } from "react"
import Data from "./Data";

const List = ({pacientes, setPaciente, deletePatient}) => {

  return (
    <div className=" lg:w-1/2  ">
        {
            pacientes && pacientes.length ? (
            <Fragment>
                   {
                    pacientes.map((paciente)=>{
                        return(
                            <Data
                             paciente={paciente} 
                             deletePatient={deletePatient} 
                             setPaciente={setPaciente} 
                             key={paciente.id} />
                        )
                    })
                   }
            </Fragment>
            ):(
                <>
                 <h2 className="text-center font-bold" >Listado de pacientes</h2>
                <h2 className="text-center font-bold text-red-700" >No hay pacientes aún. Ingresa un paciente para visualizar en esta lista</h2>
                </>
            )
        }
    </div>
  )
}

export default List