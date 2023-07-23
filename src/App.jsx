import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"
import { useState } from "react"


function App() {
  const [pacientes, setPacientes] = useState([]);


  return (
      <div className="container w-10/12 mx-auto mt-2 md:h-screen">
        <Header />
        <div className="md:flex mt-5">
          <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
       
          />
          <List
                 
          />
        </div>
      </div>
  )
}

export default App
