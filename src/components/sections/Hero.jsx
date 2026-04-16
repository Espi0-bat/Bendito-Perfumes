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
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="hero-pad" style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "140px 80px 100px",
        borderRight: "1px solid var(--gb)",
        position: "relative", zIndex: 2,
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
          fontSize: "clamp(2.6rem,5.5vw,6rem)",
          fontWeight: 700, lineHeight: 1.04,
          color: "var(--w)",
          ...tr(.45),
        }}>
          Bendito Perfume:<br />
          <em style={{ color: "var(--g)", fontStyle: "italic" }}>A Assinatura</em><br />
          Olfativa do<br />
          Sucesso
        </h1>

        <div className="rule" style={{ maxWidth: 180, margin: "32px 0", ...tr(.6) }} />

        <p className="sans" style={{
          color: "var(--wm)", fontSize: ".8rem", lineHeight: 1.95,
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
          borderTop: "1px solid var(--gb)", paddingTop: 28,
          ...tr(1),
        }}>
          {[["500+", "Clientes Premium"], ["20+", "Maisons Curadas"], ["100%", "Originais"]].map(([n, l]) => (
            <div key={l}>
              <div className="corm" style={{ color: "var(--g)", fontSize: "1.75rem", fontWeight: 600 }}>{n}</div>
              <div className="sans" style={{ color: "var(--wm)", fontSize: ".55rem", letterSpacing: ".18em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right" style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(140deg,#F5EFE6 0%,#FDFBF7 55%,#EFE5D5 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 75% 55% at 50% 38%,rgba(212,175,55,.07) 0%,transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-25%", right: "-25%",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(212,175,55,.04) 0%,transparent 70%)",
        }} />
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "rgba(212,175,55,.04)" }} />
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "rgba(212,175,55,.04)" }} />

        <div className="float" style={{ position: "relative", zIndex: 2 }}>
          <Bottle scale={1.35} glow label="SIGNATURE" />
        </div>

        <div className="corm" style={{
          position: "absolute", right: 28, top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          color: "var(--g)", fontSize: ".58rem", letterSpacing: ".45em",
          opacity: .4, whiteSpace: "nowrap",
        }}>
          PERFUMES ORIGINAIS · DECANTS EXCLUSIVOS · BRASÍLIA DF
        </div>

        <div style={{
          position: "absolute", top: 30, right: 30, width: 40, height: 40,
          borderTop: "1px solid var(--gb)", borderRight: "1px solid var(--gb)",
        }} />
        <div style={{
          position: "absolute", bottom: 30, left: 30, width: 40, height: 40,
          borderBottom: "1px solid var(--gb)", borderLeft: "1px solid var(--gb)",
        }} />
      </div>

      <div className="sans" style={{
        position: "absolute", bottom: 32, left: 80,
        color: "var(--wd)", fontSize: ".56rem", letterSpacing: ".25em",
        ...tr(1.2),
      }}>
        ↓ SCROLL
      </div>
    </section>
  );
};
