export default function Cliente() {
  const productos = [
    { nombre: "Thermo T3", imagen: "/thermo_t3.jpg", precio: "S/ 189" },
    { nombre: "Berry Balance", imagen: "/berry_balance.jpg", precio: "S/ 179" },
    { nombre: "Shake It", imagen: "/shake_it.jpg", precio: "S/ 165" },
    { nombre: "Reishi Plus", imagen: "/reishi_plus.jpg", precio: "S/ 199" },
    { nombre: "Vita Xtra T+", imagen: "/vita_xtra_tplus.jpg", precio: "S/ 185" },
    { nombre: "Prunex", imagen: "/prunex.jpg", precio: "S/ 150" },
    { nombre: "BioPro Sport", imagen: "/biopro_sport.jpg", precio: "S/ 210" },
    { nombre: "Cacao Xtra", imagen: "/cacao_xtra.jpg", precio: "S/ 175" },
    { nombre: "Ganoderma Lucidum", imagen: "/ganoderma_lucidum.jpg", precio: "S/ 195" },
    { nombre: "Floravital", imagen: "/floravital.jpg", precio: "S/ 170" },
    { nombre: "Omega 3", imagen: "/omega_3.jpg", precio: "S/ 160" },
    { nombre: "Colagen Pro", imagen: "/colagen_pro.jpg", precio: "S/ 180" },
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1 style={{ textAlign: "center", color: "#1F5E3B" }}>
        Catálogo Oficial VitaFux
      </h1>
      <p style={{ textAlign: "center" }}>
        Distribución oficial Fuxion – Huaraz | Envíos nacionales e internacionales
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px",
        marginTop: "40px"
      }}>
        {productos.map((producto, index) => (
          <div key={index} style={{
            border: "1px solid #ddd",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
          }}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{ width: "100%", height: "250px", objectFit: "contain" }}
            />
            <h3>{producto.nombre}</h3>
            <p style={{ fontWeight: "bold", color: "#1F5E3B" }}>
              {producto.precio}
            </p>
            <a
              href={`https://wa.me/51987275932?text=Hola,%20quiero%20comprar%20${producto.nombre}`}
              target="_blank"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#25D366",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none"
              }}
            >
              Comprar por WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
