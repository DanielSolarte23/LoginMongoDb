import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegistesPage from "./pages/RegistesPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home pages</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistesPage />} />
          <Route path="/tasks" element={<h1>taskPage</h1>} />
          <Route path="/add-task" element={<h1>new task</h1>} />
          <Route path="/tasks/:id" element={<h1>Update tasks</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

//Quedamos en el minuto 02:05mts
export default App;
