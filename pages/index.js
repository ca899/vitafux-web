export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "#1F5E3B" }}>VitaFux</h1>
      <p>Centro de Bienestar y Distribución Oficial Fuxion</p>
      <p>Huaraz – Envíos nacionales e internacionales</p>

      <div style={{ marginTop: "40px" }}>
        <a
          href="https://wa.me/51987275932?text=Hola%2C%20quiero%20información%20sobre%20los%20productos%20VitaFux"
          target="_blank"
        >
          <button style={{ padding: "15px 25px", margin: "10px" }}>
            Quiero mejorar mi salud
          </button>
        </a>

        <a
          href="https://wa.me/51987275932?text=Hola%2C%20quiero%20información%20para%20unirme%20a%20VitaFux"
          target="_blank"
        >
          <button style={{ padding: "15px 25px", margin: "10px" }}>
            Quiero generar ingresos
          </button>
        </a>
      </div>

      <div style={{ marginTop: "50px" }}>
        <a
          href="https://www.facebook.com/share/1FGe8Q9azt/"
          target="_blank"
        >
          Visítanos en Facebook
        </a>
      </div>
    </div>
  );
  }
