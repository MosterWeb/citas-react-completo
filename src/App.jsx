import Header from "./components/Header"
import Form from "./components/Form"
import { useState, useEffect } from "react"
import List from "./components/List"


function App() {
  const pacientesLS = JSON.parse(localStorage.getItem("pacientes"))?? [];
  const [pacientes, setPacientes] = useState(()=>pacientesLS);
  const [paciente, setPaciente] = useState({});

  
  
  useEffect(()=>{
    localStorage.setItem("pacientes",JSON.stringify(pacientes));
  },[pacientes]);

  const deletePatient = (id)=>{
    const actualizado = pacientes.filter(paciente=> paciente.id !== id);
    setPacientes(actualizado);    
  }

  return (
      <div className="container w-10/12 mx-auto mt-2 md:h-screen">
        <Header />
        <div className="md:flex mt-5">
          <Form
          setPacientes = {setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
          <List
            pacientes = {pacientes} 
            setPaciente = {setPaciente} 
            deletePatient={deletePatient}        
          />
        </div>
      </div>
  )
}

export default App
