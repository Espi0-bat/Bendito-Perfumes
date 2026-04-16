import { SITE_CONFIG } from "../../config";

export const Footer = () => (
  <footer style={{
    padding: "52px 64px", background: "var(--c1)",
    borderTop: "1px solid var(--gb)",
    display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24,
  }}>
    <div>
      <div className="corm" style={{ color: "var(--g)", fontSize: "1.4rem", fontWeight: 300, letterSpacing: ".28em", marginBottom: 8 }}>
        {SITE_CONFIG.brandDetails.nome.toUpperCase()}
      </div>
      <div className="sans" style={{ color: "var(--wm)", fontSize: ".56rem", letterSpacing: ".18em" }}>
        {SITE_CONFIG.brandDetails.slogan} · Brasília, DF
      </div>
    </div>

    <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
      {["Instagram", "WhatsApp", "Catálogo", "Contato"].map(l => (
        <button key={l} className="nlink" style={{ fontSize: ".58rem", letterSpacing: ".18em" }}>{l}</button>
      ))}
    </div>

    <div className="sans" style={{ color: "var(--wd)", fontSize: ".52rem", letterSpacing: ".12em" }}>
      © MMXXV Bendito Perfume — Todos os Direitos Reservados
    </div>
  </footer>
);
