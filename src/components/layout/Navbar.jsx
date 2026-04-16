import { useState, useEffect } from "react";
import { SITE_CONFIG } from "../../config";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleConsultoriaClick = () => {
    SITE_CONFIG.tracking.trackClick("Navbar_Acesso_Private");
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      padding: "22px 64px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      backdropFilter: scrolled ? "blur(22px) saturate(160%)" : "none",
      background: scrolled ? "rgba(253,251,247,.85)" : "transparent",
      borderBottom: `1px solid ${scrolled ? "rgba(212,175,55,.18)" : "transparent"}`,
      transition: "background .5s,border-color .5s",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: 1, height: 30, background: "var(--g)" }} />
        <span className="corm responsive-logo" style={{ color: "var(--g)", fontSize: "1.55rem", fontWeight: 300, letterSpacing: ".28em" }}>
          BENDITO PERFUME
        </span>
        <div style={{ width: 1, height: 30, background: "var(--g)" }} className="hide-mobile" />
      </div>

      {/* Links */}
      <div className="hide-mobile" style={{ display: "flex", gap: 40 }}>
        {["Coleção", "Perfil Olfativo", "Manifesto", "Conciergerie"].map(l => (
          <button key={l} className="nlink">{l}</button>
        ))}
      </div>

      {/* CTA */}
      <button className="btn-ghost hide-mobile" onClick={handleConsultoriaClick} style={{ padding: "10px 22px", fontSize: ".58rem" }}>
        Acesso Private
      </button>
    </nav>
  );
};
