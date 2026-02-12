export default function Cliente() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", backgroundColor: "#f4f6f8" }}>

      <h1 style={{ color: "#1F5E3B" }}>Catálogo de Productos Fuxion</h1>
      <p>Precios referenciales – Distribución desde Huaraz con envíos nacionales e internacionales.</p>

      <div style={{ marginTop: "40px" }}>

        <Product 
          name="Berry Balance"
          price="S/ 185"
          description="Apoya el control del azúcar en sangre y la salud metabólica."
        />

        <Product 
          name="Thermo T3"
          price="S/ 170"
          description="Estimula el metabolismo y favorece la reducción de grasa corporal."
        />

        <Product 
          name="Reishi Plus"
          price="S/ 160"
          description="Refuerza el sistema inmunológico y mejora la vitalidad."
        />

        <Product 
          name="Vita Xtra T+"
          price="S/ 150"
          description="Energía física y mental sin efectos secundarios."
        />

      </div>

      <a 
        href="https://wa.me/51987275932?text=Hola%20quiero%20comprar%20productos%20Fuxion"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "40px",
          padding: "15px 30px",
          backgroundColor: "#25D366",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold"
        }}
      >
        Solicitar por WhatsApp
      </a>

    </div>
  );
}

function Product({ name, price, description }) {
  return (
    <div style={{
      backgroundColor: "white",
      padding: "20px",
      marginBottom: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
    }}>
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p style={{ fontWeight: "bold", color: "#1F5E3B" }}>{price}</p>
      <p>{description}</p>
    </div>
  );
}
