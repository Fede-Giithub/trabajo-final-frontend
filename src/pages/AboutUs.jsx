import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"

const AboutUs = () => {
  return (
    <Layout>
      <section class="d-flex flex-column min-vh-100">
      <section class="mb-4 text-center" >
        <h2>¿De qué trata el proyecto?</h2>
        <p>El proyecto es una página que simula registrarse, logearse y comprar cosas</p>
      </section>
      <section class="mb-4 text-center">
        <h2>¿A quién está dirigido?</h2>
        <p>Este proyecto es una práctica dirigida a nuestros profesores que nos enseñaron durante el transcurso del curso</p>
      </section>
      <section class="mb-4 text-center">
        <h2>¿Que tecnologías se usaron?</h2>
        <p>Se utilizaron react, bootstrap , html, css y javascript</p>
      </section>
      </section>
    </Layout>
  )
}

export { AboutUs }