function Navbar({ onShowStats, onNewText, loading = false }) {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "60px",
      backgroundColor: "#1e293b",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      fontSize: "1.3rem",
      fontWeight: "bold",
      zIndex: 1000,
      boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
    }}>
      <div 
        className="Logo" 
        style={{ 
          width: "40px", 
          height: "40px", 
          backgroundImage: "url(keyboard.svg)", 
          backgroundSize: "contain", 
          backgroundRepeat: "no-repeat", 
          filter: "invert(100%)" 
        }} 
      />

      <div>TYPEFAST</div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button 
          onClick={onShowStats}
          style={{
            background: "none",
            border: "none",
            color: "#a5b4fc",
            fontSize: "1.4rem",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            transform: "scale(1)",
          }}
        >
          📊
        </button>

        <button 
          onClick={onNewText}
          disabled={loading}
          title={loading ? "Загрузка..." : "Новый текст"}
          style={{
            background: "none",
            border: "none",
            color: loading ? "#475569" : "#94a3b8",
            fontSize: "1.6rem",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1,
            transition: "all 0.2s",
            transition: "transform 0.3s ease",
            transform: "scale(1)",
          }}
        >
          {loading ? "⏳" : "⟳"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;