import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"
import logoCarrito from '../assets/logo_carrito.png';
import "../styles/components/Header.css"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header style={{ backgroundColor: "#4CAF50" }}>
      
  <nav className="nav ">
    <div className="d-flex justify-content-start align-items-center">
  <img
    src={logoCarrito}
    alt="logo carrito"
    style={{ width: "40px", height: "auto" }}
  />
</div>
  {user && (
    <>
      <Link className="nav-link" to="/">Inicio</Link>
      <Link className="nav-link" to="/dashboard">Dashboard</Link>
      <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>Cerrar sesión</button>
    </>
  )}

  {!user && (
    <>
      <Link className="nav-link" to="/login">Login</Link>
      <Link className="nav-link" to="/registrate">Registrate</Link>
      <Link className="nav-link" to="/AboutUS">Sobre Nosotros</Link>
    </>
  )}
</nav>
    </header>
  )
}

export { Header }