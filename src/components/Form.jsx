import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({setPacientes, pacientes, paciente, setPaciente}) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  
  useEffect(()=>{
    const {mascota, propietario, email, alta, sintomas} = paciente;
    if(Object.keys(paciente).length > 0){      
      setMascota(mascota);
      setPropietario(propietario);
      setEmail(email);
      setAlta(alta);
      setSintomas(sintomas);
    }
  },[paciente]);
//Agregar id
const getId = ()=>{
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
}
  const handleSubmit = (e)=>{
    e.preventDefault();
    if([mascota, propietario, email, alta, sintomas].includes("")){
      setError(true);
      return;      
    }
    setError(false);
    console.log(error)
    
    //Agregar paciente
    const dataObj = {
      mascota,
      propietario,
      email,
      alta,
      sintomas,
    }
    if(paciente.id){
      dataObj.id = paciente.id;
      const pacienteActualizados = pacientes.map(patient => patient.id == paciente.id ? dataObj : patient);
      setPacientes(pacienteActualizados);  
      setPaciente({});    
    }else{
      dataObj.id = getId();
      setPacientes([...pacientes, dataObj]);
    }
    
    //resetear 
    setMascota("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  }

  return (
    <div className="md:w-2/5 lg:w-1/2">
      <h2 className="text-center font-bold">Agrega pacientes y sus dueños</h2>
      <div className="px-10 py-1">
        <form onSubmit={handleSubmit} className="mt-5 p-4 bg-white">
          {error &&
          <Error mensaje={"Los datos son requeridos"} />
          }

          {/* Mascotas  */}
          <div >
            <label className="font-medium" htmlFor="mascota">
              Mascota: {"" + mascota} 
            </label>
            <input
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
             onChange={(e)=>setMascota(e.target.value)}
            type="text"
            id="mascota"
            placeholder="Ingresa el nombre de la mascota"
            value={mascota}
            />
          </div>

          {/* Propietario  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="propietario">
              Propietario: {"" + propietario} 
            </label>
            <input
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
             onChange={(e)=>setPropietario(e.target.value)}
            type="text"
            id="propietario"
            placeholder="Ingresa el nombre del propietario"
            value={propietario}
            />
          </div>

          {/* Email  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="email">
              Email: {"" + email} 
            </label>
            <input
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
            type="email"
            id="email"
            placeholder="Ingresa email"
            value={email}
            />
          </div>

          {/* Alta  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="alta">
              Alta: {"" + alta} 
            </label>
            <input
            onChange={(e)=>setAlta(e.target.value)}
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
            type="date"
            id="alta"
            value={alta}
            />
          </div>

          {/* Descripción  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="sintomas">
             Síntomas: {"" + sintomas} 
            </label>
            <textarea
            onChange={(e)=>setSintomas(e.target.value)}
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
            type="text"
            id="sintomas"
            placeholder="Ingresa el nombre de la mascota"
            value={sintomas}
            />
          </div>
          <input className="btn" type="submit" value={paciente.id? "Editar paciente" : "Agregar paciente"} />          

        </form>
      </div>
    </div>
  );
};

export default Form;
