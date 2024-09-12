import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() =>{
     if(isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)]">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2 " key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold">Inicio Sesión</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoComplete="off"
            placeholder="Correo"
          />
          {errors.email && (
            <p className="text-red-500">El correo es requerido </p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}
          <button className=" bg-lime-500 px-3 py-1 rounded-md hover:bg-lime-600" type="submit">Iniciar Sesión</button>
        </form>
        <p className="flex gap-2 justify-between ">
          No tienes una cuenta?<Link to="/register" className="text-lime-500 hover:text-lime-600">Registrate</Link>
        </p>
      </div>
    </div>
  );
}
//Vamos en el M2:40
export default LoginPage;
