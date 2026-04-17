import { useInView } from "../../hooks/useInView";
import { ProductCard } from "../ui/ProductCard";
import { PRODUCTS } from "../../config";

export const SignatureCollection = () => {
  const [hRef, hInView] = useInView();
  return (
    <section className="pad-section" style={{ padding: "120px 64px", position: "relative" }}>
      <div className="gold-glow-orb" style={{ width: 600, height: 600, top: "20%", left: "-200px" }} />
      <div className="mobile-only" style={{
        position: "absolute", right: 28, top: 120, width: 1, height: 200, background: "linear-gradient(to bottom, var(--g), transparent)"
      }} />
      <div className="mobile-only" style={{
        position: "absolute", right: 18, top: 120, width: 20, height: 1, background: "var(--g)"
      }} />

      <div className="rule" />
      <div ref={hRef} style={{ padding: "72px 0 56px", maxWidth: 620, position: "relative", zIndex: 2 }}>
        <div className={`rv slabel ${hInView ? "on" : ""}`} style={{ marginBottom: 18 }}>I. Coleção Assinatura</div>
        <h2 className={`rv d1 serif ${hInView ? "on" : ""}`} style={{
          fontSize: "clamp(2.4rem,4vw,3.8rem)", fontWeight: 700, lineHeight: 1.1, color: "var(--w)", marginBottom: 22,
        }}>
          Fragrâncias que<br /><em style={{ color: "var(--g)" }}>Definem Líderes</em>
        </h2>
        <p className={`rv d2 sans ${hInView ? "on" : ""}`} style={{ color: "var(--wm)", fontSize: ".8rem", lineHeight: 1.9, fontWeight: 300 }}>
          Uma curadoria restrita das fragrâncias mais influentes do mundo. Não são produtos — são instrumentos de impressão duradoura.
        </p>
      </div>

      <div className="col4 grid-border" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
        {PRODUCTS.map((p, i) => <ProductCard key={p.number} {...p} delay={i * .11} />)}
      </div>
    </section>
  );
};
