export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f6f8" }}>
{/* NAVBAR SUPERIOR */}
<div style={{
  backgroundColor: "white",
  padding: "15px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
}}>

  <h2 style={{ color: "#1F5E3B", margin: 0 }}>
    VitaFux
  </h2>

  <div>
    <span style={{
      fontWeight: "bold",
      color: "#1F5E3B",
      fontSize: "16px"
    }}>
      📲 967 861 674
    </span>
  </div>

</div>
      {/* HERO SECTION */}
      <div style={{
        backgroundColor: "#1F5E3B",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          VitaFux
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
          Distribuidor Independiente Oficial de Productos Fuxion en Perú.
          Especialistas en control de peso, bienestar integral y asesoría personalizada.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="/cliente"
            style={{
              padding: "14px 30px",
              backgroundColor: "white",
              color: "#1F5E3B",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "15px"
            }}
          >
            Ver Catálogo
          </a>

          <a
            href="/emprendedor"
            style={{
              padding: "14px 30px",
              backgroundColor: "#25D366",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Quiero Emprender
          </a>
        </div>
      </div>

      {/* SECCIÓN PRINCIPAL */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>

        <h2 style={{ color: "#1F5E3B", marginBottom: "20px" }}>
          Enfoque en Control de Peso y Bienestar
        </h2>

        <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
          En VitaFux trabajamos con productos funcionales diseñados para apoyar el control de peso,
          mejorar el metabolismo, optimizar la digestión y fortalecer el bienestar general.
          Nuestro servicio incluye orientación personalizada para ayudarte a elegir el producto
          adecuado según tus objetivos.
        </p>

      </div>

      {/* DISTRIBUIDOR */}
      <div style={{
        backgroundColor: "white",
        padding: "50px 20px",
        textAlign: "center"
      }}>

        <h3 style={{ color: "#1F5E3B" }}>
          Distribución Oficial
        </h3>

        <p style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.8" }}>
          VitaFux opera a través de un Distribuidor Independiente autorizado,
          brindando atención directa, seguimiento personalizado y acompañamiento continuo.
        </
