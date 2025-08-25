import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext";

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }

    const usuarioRegistrado = await register(username, password, email);

    if (usuarioRegistrado) {
      setSuccess("Usuario registrado con éxito");
      setUsername("");
      setEmail("");
      setPassword("");
    } else {
      setError("Error al registrar usuario");
    }
  };

  return (
    <Layout>
      <section class="d-flex flex-column min-vh-100">
      <h1 className="ps-4">Registrate</h1>

      <section className="ps-5">
        <h2>Hola, bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label className="me-3" >Username:</label>
            <input  className="mt-3 d-inline p-2 bd-highlight rounded-pill"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label className="me-3">Correo electrónico:</label>
            <input  className="mt-3 d-inline p-2 bd-highlight rounded-pill"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label className="me-3" >Contraseña:</label>
            <input  className="mt-3 d-inline p-2 bd-highlight rounded-pill"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button style={{ background: "#4CAF50" }} className="mt-3 d-inline p-2 bd-highlight rounded-pill">Ingresar</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </section>
      </section>
    </Layout>
  );
} 

export { Register };