/* eslint-disable react/prop-types */


const Data = ({paciente, setPaciente, deletePatient}) => {
    const {mascota, propietario, email, alta, sintomas} = paciente;
    const handleDelete = (id)=>{
        if(confirm("¿Deseas dar de alta a este paciente?")){
            deletePatient(id);
            setPaciente({});
        }
    }
  return (
    <section>
         <h2 className="text-center font-bold" >Listado de pacientes</h2>
                    <section className="mt-5 bg-white shadow-md p-3">
                        <h3 className="font-bold">Mascota: <span className="font-normal">{mascota}</span></h3>
                        <h3 className="font-bold">Propietario: <span className="font-normal">{propietario}</span></h3>
                        <h3 className="font-bold">Email: <span className="font-normal">{email}</span></h3>
                        <h3 className="font-bold">Alta: <span className="font-normal">{alta}</span></h3>
                        <h3 className="font-bold">Sintomas: <span className="font-normal">{sintomas}</span></h3>
                        <section>
                            <button onClick={()=>setPaciente(paciente)} >Editar</button>
                            <button onClick={()=>handleDelete(paciente.id)}>Eliminar</button>
                        </section>
                    </section>
    </section>
  )
}

export default Data