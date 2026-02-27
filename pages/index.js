export default function Home() {
  return (
    <div style={{ 
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#f4f6f8",
      color: "#1F3E3B"
    }}>

      {/* HEADER */}
      <header style={{
        backgroundColor: "#1F5E3B",
        color: "white",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ margin: 0, fontSize: "42px" }}>VitaFux</h1>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          Centro de Bienestar y Distribución Oficial Fuxion
        </p>
        <p style={{ fontSize: "14px", opacity: 0.9 }}>
          Huaraz – Envíos nacionales e internacionales
        </p>
      </header>

      {/* PRESENTACIÓN PRINCIPAL */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px" }}>Elige cómo deseas comenzar</h2>
        <p style={{ maxWidth: "600px", margin: "20px auto", fontSize: "16px" }}>
          En VitaFux te acompañamos en tu proceso de bienestar o crecimiento
          profesional dentro de la comunidad Fuxion.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a href="/cliente" style={buttonStyle}>
            Quiero mejorar mi salud
          </a>

          <a href="/emprendedor" style={buttonStyleSecondary}>
            Quiero generar ingresos
          </a>
        </div>
      </section>

      {/* CONTACTO */}
      <section style={{
        backgroundColor: "#ffffff",
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h3>Asesoría personalizada</h3>
        <p>Contáctanos directamente para orientación y pedidos.</p>

        <a 
          href="https://wa.me/51967861674?text=Hola%20quiero%20información%20sobre%20productos%20Fuxion"
          target="_blank"
          style={whatsappStyle}
        >
          Contactar por WhatsApp
        </a>

        <p style={{ marginTop: "20px" }}>
          <a 
            href= “https://www.facebook.com/share/1D8dN7n6VL/”
            target="_blank"
            style={{ color: "#1F5E3B", fontWeight: "bold" }}
          >
            Visítanos en Facebook
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: "#1F5E3B",
        color: "white",
        padding: "20px",
        textAlign: "center",
        fontSize: "14px"
      }}>
        © {new Date().getFullYear()} VitaFux – Distribuidor Oficial Fuxion
      </footer>

    </div>
  );
}

/* ESTILOS BOTONES */
const buttonStyle = {
  display: "inline-block",
  padding: "15px 30px",
  margin: "10px",
  backgroundColor: "#1F5E3B",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold"
};

const buttonStyleSecondary = {
  display: "inline-block",
  padding: "15px 30px",
  margin: "10px",
  backgroundColor: "white",
  color: "#1F5E3B",
  border: "2px solid #1F5E3B",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold"
};

const whatsappStyle = {
  display: "inline-block",
  padding: "15px 30px",
  marginTop: "20px",
  backgroundColor: "#25D366",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold"
};
