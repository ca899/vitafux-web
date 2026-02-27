function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/51967861674"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "15px 20px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        💬 WhatsApp Directo
      </a>
    </>
  );
}

export default MyApp;
