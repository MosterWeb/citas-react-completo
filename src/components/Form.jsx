

const Form = () => {
 
  
 

  return (
    <div className="md:w-2/5 lg:w-1/2">
      <h2 className="text-center font-bold">Agrega pacientes y sus dueños</h2>
      <div className="px-10 py-1">
        <form className="mt-5 p-4 bg-white">
         

          {/* Mascotas  */}
          <div >
            <label className="font-medium" htmlFor="mascota">
              Mascota: 
            </label>
            <input
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
             
            type="text"
            id="mascota"
            placeholder="Ingresa el nombre de la mascota"
           
            />
          </div>

          {/* Propietario  */}
          <div className="mt-3">
            <label className="font-medium" htmlFor="propietario">
             
            </label>
            <input
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
             
            </label>
            <input
           
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
            
            </label>
            <input
          
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
           
            </label>
            <textarea
         
              className="w-full mt-1 p-1 focus:outline-none border-2
             focus:border-slate-300
             rounded-md "
            type="text"
            id="sintomas"
            placeholder="Ingresa el nombre de la mascota"
       
            />
          </div>
          <input className="btn" type="submit" value="Agregar paciente"/>          

        </form>
      </div>
    </div>
  );
};

export default Form;
