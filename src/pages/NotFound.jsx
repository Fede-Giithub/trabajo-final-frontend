import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <section class="d-flex flex-column min-vh-100">
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p>Verificá la URL o volvé al inicio.</p>
      <Link to="/">Ir a inicio</Link>
      </section>
    </Layout>
  )
}

export { NotFound }