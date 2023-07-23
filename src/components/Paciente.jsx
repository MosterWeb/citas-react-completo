

const Paciente = ({paciente,  setPaciente, eliminarPaciente}) => {
  const handlerEliminar = ()=>{
    const respuesta = confirm("Desease limianr paciente?");
    if(respuesta){
      eliminarPaciente(paciente.id);
      setPaciente({})
    }
  }
  
  return (
    <div className="mt-5 px-10 py-2 bg-white">
          <p className="font-bold ">Mascota: <span className="font-normal">{paciente.mascota}</span></p>
          <p className="font-bold ">Propietario: <span className="font-normal">{paciente.propietario}</span></p>
          <p className="font-bold ">Email: <span className="font-normal">{paciente.email}</span></p>
          <p className="font-bold ">Alta: <span className="font-normal">{paciente.alta}</span></p>
          <p className="font-bold ">Síntomas: <span className="font-normal">{paciente.descripcion}</span></p>
          <div className="flex gap-3">
            <button onClick={()=>{setPaciente(paciente)}} className="btn-edit">Editar</button>
            
            <button onClick={handlerEliminar} className="btn-delete">Eiminar</button>
          </div>
    </div>
  )
}

export default Paciente