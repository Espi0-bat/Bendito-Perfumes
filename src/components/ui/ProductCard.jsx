import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { Bottle } from "./Bottle";
import { SITE_CONFIG } from "../../config";

export const ProductCard = ({ number, name, family, profile, image, notes, label, delay = 0 }) => {
  const [ref, inView] = useInView(.12);
  const [hov, setHov] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleProductClick = () => {
    SITE_CONFIG.tracking.trackClick("Ver_Perfume", name);
  };

  return (
    <div
      ref={ref}
      className={`rv ${inView ? "on" : ""}`}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      <div 
        className="pcard"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span className="corm" style={{ color: "var(--g)", fontSize: ".75rem", letterSpacing: ".2em", opacity: .65 }}>
          {String(number).padStart(2, "0")}
        </span>
        <div style={{
          height: 1, background: hov ? "var(--g)" : "var(--gb)",
          width: hov ? 44 : 28,
          marginTop: 8,
          transition: "width .4s,background .4s",
        }} />
      </div>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        padding: "16px 0", 
        height: 200, 
        alignItems: "center",
        position: "relative"
      }}>
        {(!image || imgError) ? (
          <Bottle scale={.6} glow={hov} label={label} opacity={hov ? 1 : .7} />
        ) : (
          <img 
            src={image} 
            alt={name}
            onError={() => setImgError(true)}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              filter: hov ? "drop-shadow(0 0 20px rgba(212,175,55,0.2)) brightness(1.1)" : "brightness(0.9)",
              transform: hov ? "scale(1.1)" : "scale(1)",
              transition: "transform .6s cubic-bezier(.16,1,.3,1), filter .6s ease",
            }}
          />
        )}
      </div>

      <div><span className="tag">{family}</span></div>

      <h3 className="serif" style={{ color: "var(--w)", fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.2 }}>
        {name}
      </h3>

      <p className="sans" style={{ color: "var(--wm)", fontSize: ".72rem", lineHeight: 1.85, fontWeight: 300 }}>
        {profile}
      </p>

      <div>
        <div className="slabel" style={{ fontSize: ".52rem", opacity: .7, marginBottom: 10 }}>Notas Principais</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {notes.map(n => (
            <span key={n} className="sans" style={{
              fontSize: ".58rem", color: "var(--wm)", letterSpacing: ".08em",
              padding: "4px 10px",
              background: "rgba(212,175,55,.04)",
              border: "1px solid rgba(212,175,55,.14)",
            }}>{n}</span>
          ))}
        </div>
      </div>

      <button className="btn-ghost" onClick={handleProductClick} style={{ marginTop: "auto", textAlign: "center", width: "100%", padding: "14px 0" }}>
        Conhecer Perfume
      </button>
    </div>
    </div>
  );
};
