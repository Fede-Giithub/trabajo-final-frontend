import { useState } from "react"
import { Layout } from "../components/Layout"

const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)



  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!name || !price || !description) {
      setError("Debes completar todos los campos")
      return
    }

    if (name.length < 3) {
      setError("El nombre debe tener al menos 4 caracteres")
      return
    }
     if (name.length > 41) {
      setError("El nombre debe tener menos de 40 caracteres")
      return
    }
    if (description.length < 10) {
      setError("La descripción es muy corta")
      return
    }
    if (price < 1) {
      setError("El precio debe ser mayor que 0")
      return
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: "",
      image: ""
    }

    // petición al backend mediante fetch -> método POST https://fakeproductapi.com/products
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    const data = await response.json()
    setProduct(data)
    setName("")
    setPrice("")
    setDescription("")
  }

  return (
    <Layout>
      <h1>Panel de Administración</h1>

      <section class="d-flex flex-column min-vh-100" >
        <h2>Cargar nuevo producto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="me-3" >Nombre del producto:</label>
            <input  className=" mt-3 d-inline p-2 bd-highlight rounded-pill" type="text" name="nombre" onChange={(e) => setName(e.target.value)} value={name} />
          </div>

          <div>
            <label  className="me-3" >Precio:</label>
            <input className=" mt-3 d-inline p-2 bd-highlight rounded-pill" type="number" name="precio" onChange={(e) => setPrice(e.target.value)} value={price} />
          </div>

          <div className="pt-3">
            <label className="me-3 " >Descripción:</label>
            <textarea name="descripcion" rows="4" onChange={(e) => setDescription(e.target.value)} value={description} />
          </div>

          {
            error && <p className="error">{error}</p>
          }

          <button style={{ background: "#4CAF50" }} className="mt-3 d-inline p-2 bd-highlight rounded-pill " >Guardar producto</button>
        </form>

        {
          product && <div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        }
      </section>
    </Layout>
  )
}

export { Dashboard }
