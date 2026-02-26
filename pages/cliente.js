export default function Cliente() {
  const productos = [
    {
      nombre: "Flora Liv",
      imagen: "/flora_liv.jpg",
      precio: "Consultar",
      descripcion: "Equilibrio digestivo y bienestar intestinal."
    },
    {
      nombre: "Prunex",
      imagen: "/prunex.jpg",
      precio: "Consultar",
      descripcion: "Apoyo natural para tránsito intestinal saludable."
    },
    {
      nombre: "Vita Xtra T",
      imagen: "/vita_xtra_t.jpg",
      precio: "Consultar",
      descripcion: "Energía física y mental con fórmula natural."
    },
    {
      nombre: "Thermo T3",
      imagen: "/thermo_t3.jpg",
      precio: "Consultar",
      descripcion: "Apoyo metabólico y control de peso."
    },
    {
      nombre: "No Carb-T",
      imagen: "/no_carb_t.jpg",
      precio: "Consultar",
      descripcion: "Control de antojos y apoyo en reducción de carbohidratos."
    }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", backgroundColor: "#f4f6f8" }}>

      <h1 style={{ textAlign: "center", color: "#1F5E3B" }}>
        Control de Peso y Bienestar Natural
      </h1>

      <p style={{ textAlign: "center", maxWidth: "600px", margin: "20px auto" }}>
        Productos Fuxion distribuidos oficialmente por VitaFux.
        Asesoría personalizada desde Huaraz con envíos nacionales e internacionales.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "30px",
        marginTop: "50px"
      }}>
        {productos.map((producto, index) => (
          <div key={index} style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "25px",
            textAlign: "center",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
            transition: "transform 0.2s ease"
          }}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "contain",
                marginBottom: "20px"
              }}
            />
            <h3 style={{ marginBottom: "5px" }}>{producto.nombre}</h3>
            <p style={{ fontWeight: "bold", color: "#1F5E3B" }}>
              {producto.precio}
            </p>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              {producto.descripcion}
            </p>

            <a
              href={`https://wa.me/51967861674?text=Hola,%20quiero%20información%20sobre%20${producto.nombre}`}
              target="_blank"
              style={{
                display: "inline-block",
                marginTop: "15px",
                padding: "10px 22px",
                backgroundColor: "#25D366",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px"
              }}
            >
              Solicitar información
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
