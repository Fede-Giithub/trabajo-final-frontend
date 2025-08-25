
import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const { login } = useAuth()

  const nagivate = useNavigate()
  
  const handleLogin = async (e) => {
    e.preventDefault()
    console.log({ username, password })
    const isLogin = await login(username, password)
    setError("")
   

    

    if (isLogin) {
      setUsername("")
      setPassword("")
      nagivate("/")
    }

    if (!username ||  !password) {
      setError("Debes completar todos los campos")
      return
    }
  }

  return (
    <Layout>
      <section class="d-flex flex-column min-vh-100">
      <h1 className="ps-4">Inicia sesión</h1>

      <section className="ps-5">
        <h2>Hola, bienvenido de nuevo</h2>
        <p >johnd, m38rmF$</p>
        <form onSubmit={handleLogin}>
          <div>
            <label>Nombre de usuario:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </div>
          <button className="mt-3">Ingresar</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </section>
      </section>
    </Layout>
  )
}

export { Login }