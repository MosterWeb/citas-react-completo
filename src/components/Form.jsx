/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Error from "./Error";


const Form = ({paciente, setPaciente, pacientes, setPacientes}) => {
  const [mascota,setMascota] = useState("");
  const [propietario,setPropietario] = useState("");
  const [alta,setAlta] = useState("");
  const [email,setEmail] = useState("");
  const [sintomas,setSintomas] = useState(""); 
  const [error, setError] = useState(false); 
// Para editar debe detectar en toda la app cuando hayn un cambio.Enm ese caso ocurre este useEffct
useEffect(()=>{
  const {mascota, propietario, email, alta, sintomas} = paciente;
  if(Object.keys(paciente).length > 0){
    setMascota(mascota);
    setPropietario(propietario);
    setEmail(email);
    setAlta(alta);
    setSintomas(sintomas);
  }
}, [paciente]);

const getId = ()=>{
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
}


  const handleSubmit =(e)=>{
    e.preventDefault();
    //1 Error
    if([mascota, propietario, email, alta, sintomas].includes("")){
      setError(true);
      setTimeout(()=>{
        setError(false);
      }, 3000);
      return;
    }
    setError(false);
    
    //2 Objeto
    const pacienteObj = {
      mascota,
      propietario,
      email,
      alta,
      sintomas
    }
    //3 Editar
    if(paciente.id){
      pacienteObj.id = paciente.id;
      const editado = pacientes.map((mascota)=>mascota.id === paciente.id? pacienteObj : mascota); 
      setPacientes(editado);
      setPaciente({});
    }else{
       //4 crear
      pacienteObj.id = getId();
      setPacientes([pacienteObj, ... pacientes]);
    }
   
    // setear
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
        <form onSubmit={handleSubmit}  className="mt-5 p-4 bg-white">
         {
          error && (
           <Error >Todos los datos son requeirdos</Error>
          )
         }

          {/* Mascotas  */}
          <div >
            <label className="font-medium" htmlFor="mascota">
              Mascota: {mascota}
            </label>
            <input
            onChange={(e)=> setMascota(e.target.value)}
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
             value={mascota}
            type="text"
            id="mascota"
            placeholder="Ingresa el nombre de la mascota"
           
            />
          </div>

          {/* Propietario  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="propietario">
             Propietario: {propietario}
            </label>
            <input
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
             
            type="text"
            id="propietario"
            placeholder="Ingresa el nombre del propietario"
         
            />
          </div>

          {/* Email  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="email">
             Email:{email}
            </label>
            <input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
           
            className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
            type="email"
            id="email"
            placeholder="Ingresa email"
         
            />
          </div>

          {/* Alta  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="alta">
            Alta: {alta}
            </label>
            <input
            value={alta}
            onChange={(e)=> setAlta(e.target.value)}          
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
            type="date"
            id="alta"
       
            />
          </div>

          {/* Descripción  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="sintomas">
           Sintomas: {sintomas}
            </label>
            <textarea
            onChange={(e)=> setSintomas(e.target.value)}
            value={sintomas}
         
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
            type="text"
            id="sintomas"
            placeholder="Ingresa el nombre de la mascota"
       
            />
          </div>
          <input className="btn" type="submit" value={`${paciente.id ? "Editar" : "Agregar"}`}/>          

        </form>
      </div>
    </div>
  );
};

export default Form;
