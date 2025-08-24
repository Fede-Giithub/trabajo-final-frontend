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
      <h1 className="ps-4">Registrate</h1>

      <section className="ps-5">
        <h2>Hola, bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label>Username:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="mt-3">Ingresar</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </section>
    </Layout>
  );
} 

export { Register };