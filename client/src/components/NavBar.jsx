import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(user);

  return (
    <nav className=" bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </Link>
      <ul className="flex gap-x-5 items-center ">
        {isAuthenticated ? (
          <>
            <li className="text-lime-600">Bienvenido {user.username}</li>
            <li>
              <Link to="/add-task" className="bg-zinc-800 p-2 rounded-md">Añadir Tarea</Link>
            </li>
            <li className="p-2 bg-lime-600 rounded-md">
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Cerrar Sesión
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="bg-lime-600 p-2 rounded-md">
              <Link to="/login">Inicio Sesión</Link>
            </li>
            <li className="p-2 border border-lime-600 rounded-md">
              <Link to="/register">Registro</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
