export default function Emprendedor() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", backgroundColor: "#f4f6f8" }}>

      <h1 style={{ textAlign: "center", color: "#1F5E3B" }}>
        Oportunidad VitaFux
      </h1>

      <p style={{ textAlign: "center", maxWidth: "700px", margin: "20px auto" }}>
        Forma parte de una comunidad enfocada en bienestar integral y generación de ingresos.
        Trabaja con productos respaldados internacionalmente y construye tu propio crecimiento.
      </p>

      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "16px",
        marginTop: "40px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
      }}>

        <h2 style={{ color: "#1F5E3B" }}>¿Por qué unirte?</h2>

        <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
          <li>✔ Productos de alta demanda en control de peso y bienestar.</li>
          <li>✔ Modelo flexible que se adapta a tu tiempo.</li>
          <li>✔ Capacitación y acompañamiento constante.</li>
          <li>✔ Posibilidad de ingresos adicionales reales.</li>
          <li>✔ Impacto positivo en la salud de las personas.</li>
        </ul>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="https://wa.me/51987275932?text=Hola,%20quiero%20información%20para%20unirme%20a%20VitaFux"
            target="_blank"
            style={{
              padding: "14px 30px",
              backgroundColor: "#1F5E3B",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Quiero unirme a la comunidad
          </a>
        </div>

      </div>

      <div style={{ textAlign: "center", marginTop: "50px", fontSize: "14px" }}>
        Centro de Operaciones: Huaraz – Perú  
        <br />
        Envíos nacionales e internacionales
      </div>

    </div>
  );
}
