import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";
import { useEffect } from "react";
// Este es comodin
function App() {
  const pacientesLS = JSON.parse(localStorage.getItem("pacientes") ?? []);
  const [pacientes, setPacientes] = useState(() => pacientesLS);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const result = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(result)
  
  };

  return (
    <div className="container w-10/12 mx-auto mt-2 md:h-screen">
      <Header />
      <div className="md:flex mt-5">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <List
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
