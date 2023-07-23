/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const { mascota, propietario, email, alta, descripcion } = paciente;
    if (Object.keys(paciente).length > 0) {
      setMascota(mascota);
      setPropietario(propietario);
      setEmail(email);
      setAlta(alta);
      setDescripcion(descripcion);
    }
   
  }, [paciente]);

  const getId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //1 Error
    if ([mascota, propietario, email, alta, descripcion].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    setError(false);
    //2 Objeto
    const pacientesObject = {
      mascota,
      propietario,
      email,
      alta,
      descripcion,
    };
    //3 Editar
    if (paciente.id) {
      pacientesObject.id = paciente.id;
      const pacientesActualizados = pacientes.map((mascota) =>
        mascota.id == paciente.id ? pacientesObject : mascota
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //4 crear
      pacientesObject.id = getId();
      setPacientes([pacientesObject, ...pacientes]);
   
    }

    //5 Resetear
    setMascota("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setDescripcion("");
  };

  return (
    <div className="md:w-2/5 lg:w-1/2">
      <h2 className="text-center font-bold">Agrega pacientes y sus dueños</h2>
      <div className="px-10 py-1">
        <form onSubmit={handleSubmit} className="mt-5 p-4 bg-white">
          {error && (
            <h2 className="text-center bg-red-700 text-white">
              Todos los datos son requeridos
            </h2>
          )}
          {/* Mascotas  */}
          <div>
            <label className="font-medium" htmlFor="mascota">
              Mascota: {mascota}
            </label>
            <input
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
              onChange={(e) => setMascota(e.target.value)}
              type="text"
              id="mascota"
              value={mascota}
              placeholder="Ingresa el nombre de la mascota"
            />
          </div>

          {/* Propietario  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="propietario">
              Propietario: {propietario}
            </label>
            <input
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
              onChange={(e) => setPropietario(e.target.value)}
              type="text"
              id="propietario"
              value={propietario}
              placeholder="Ingresa el nombre del propietario"
            />
          </div>

          {/* Email  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="email">
              Email: {email}
            </label>
            <input
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              value={email}
              placeholder="Ingresa email"
            />
          </div>

          {/* Alta  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="alta">
              Alta : {alta}
            </label>
            <input
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
              type="date"
              id="alta"
              value={alta}
              onChange={(e) => setAlta(e.target.value)}
            />
          </div>

          {/* Descripción  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="sintomas">
              Descripción: {descripcion}
            </label>
            <textarea
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
              type="text"
              onChange={(e) => setDescripcion(e.target.value)}
              id="sintomas"
              value={descripcion}
              placeholder="Ingresa el nombre de la mascota"
            />
          </div>
          <input className="btn" type="submit" value={`${paciente.id ? "Editar" : "Agregar"}`} />
        </form>
      </div>
    </div>
  );
};

export default Form;
