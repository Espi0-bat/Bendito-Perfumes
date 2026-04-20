import { useState, useEffect } from "react";
import { Bottle } from "../ui/Bottle";
import { SITE_CONFIG } from "../../config";

export const Hero = () => {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 180); return () => clearTimeout(t); }, []);

  const handleConsultoriaClick = () => {
    SITE_CONFIG.tracking.trackClick("Hero_Consultoria");
  };

  const handleExplorarClick = () => {
    SITE_CONFIG.tracking.trackClick("Hero_Explorar");
  };

  const tr = (delay) => ({
    opacity: on ? 1 : 0,
    transform: on ? "none" : "translateY(32px)",
    transition: `opacity .9s cubic-bezier(.16,1,.3,1) ${delay}s,transform .9s cubic-bezier(.16,1,.3,1) ${delay}s`,
  });

  return (
    <section className="hero-grid grain" style={{
      minHeight: "100vh",
      display: "flex",
      position: "relative",
      overflow: "hidden",
      backgroundImage: "url('/bendito-perfuu.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* Overlay escuro em gradiente para proteger a legibilidade do texto no celular/desktop */}
      <div className="hero-overlay" style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.5) 50%, transparent 100%)",
        zIndex: 1, pointerEvents: "none"
      }} />

      <div className="hero-pad" style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "140px 80px 100px",
        position: "relative", zIndex: 2,
        flex: 1, maxWidth: 680,
      }}>
        {/* Glow Orb */}
        <div className="gold-glow-orb" style={{ width: "180vw", height: "180vw", top: "-50vw", left: "-50vw" }} />

        {/* Mobile Watermark Bottle */}
        <div className="mobile-only" style={{
          position: "absolute", top: "25%", right: "-30%", opacity: 0.15, pointerEvents: "none", zIndex: 0
        }}>
          <Bottle scale={1.8} glow label="SIGNATURE" />
        </div>

        <div className="slabel" style={{ marginBottom: 28, position: "relative", zIndex: 2, ...tr(.25) }}>
          ✦ {SITE_CONFIG.brandDetails.location} ✦
        </div>

        <h1 className="serif" style={{
          position: "relative", zIndex: 2,
          fontSize: "clamp(2rem,8vw,6rem)",
          fontWeight: 700, lineHeight: 1.04,
          color: "#FFFFFF",
          ...tr(.45),
        }}>
          Bendito Perfume:<br />
          <em style={{ color: "var(--g)", fontStyle: "italic" }}>A Assinatura</em><br />
          Olfativa do<br />
          Sucesso
        </h1>

        <div className="rule" style={{ maxWidth: 180, margin: "32px 0", ...tr(.6) }} />

        <p className="sans" style={{
          color: "rgba(255,255,255,0.85)", fontSize: ".8rem", lineHeight: 1.95,
          fontWeight: 300, maxWidth: 380, letterSpacing: ".04em",
          ...tr(.72),
        }}>
          Fragrâncias selecionadas para líderes que compreendem que presença não se anuncia — ela se impõe. Cada frasco é um instrumento de autoridade olfativa.
        </p>

        <div className="btn-wrap-mobile" style={{ display: "flex", gap: 14, marginTop: 48, alignItems: "center", ...tr(.86) }}>
          <button className="btn-gold" onClick={handleExplorarClick}><span>Explorar Coleção</span></button>
          <button className="btn-ghost" onClick={handleConsultoriaClick}>Consultoria</button>
        </div>

        <div className="stats-wrap-mobile" style={{
          display: "flex", gap: 48, marginTop: 60,
          borderTop: "1px solid rgba(212,175,55,.25)", paddingTop: 28,
          ...tr(1),
        }}>
          {[["500+", "Clientes Premium"], ["20+", "Maisons Selecionadas"], ["100%", "Originais"]].map(([n, l]) => (
            <div key={l}>
              <div className="corm" style={{ color: "var(--g)", fontSize: "1.75rem", fontWeight: 600 }}>{n}</div>
              <div className="sans" style={{ color: "rgba(255,255,255,0.65)", fontSize: ".55rem", letterSpacing: ".18em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sans" style={{
        position: "absolute", bottom: 32, left: 80, zIndex: 2,
        color: "rgba(255,255,255,0.4)", fontSize: ".56rem", letterSpacing: ".25em",
        ...tr(1.2),
      }}>
        ↓ SCROLL
      </div>
    </section>
  );
};
