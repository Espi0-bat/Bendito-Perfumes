import { useInView } from "../../hooks/useInView";
import { ScentBar } from "../ui/ScentBar";
import { SCENTS } from "../../config";

export const ScentProfileMap = () => {
  const [hRef, hInView] = useInView();
  return (
    <section className="pad-section" style={{ padding: "120px 64px", background: "linear-gradient(180deg, #F5EFE6 0%, #EAE0D5 100%)", position: "relative" }}>
      <div className="rule" />
      <div className="col2 gap-responsive" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: 72 }}>
        <div ref={hRef}>
          <div className={`rv slabel ${hInView ? "on" : ""}`} style={{ marginBottom: 18 }}>II. Mapa de Perfis Olfativos</div>
          <h2 className={`rv d1 serif ${hInView ? "on" : ""}`} style={{
            fontSize: "clamp(2.2rem,3.8vw,3.6rem)", fontWeight: 700, lineHeight: 1.12,
            color: "var(--w)", marginBottom: 26,
          }}>
            A Taxonomia<br /><em style={{ color: "var(--g)" }}>do Poder</em><br />Olfativo
          </h2>
          <p className={`rv d2 sans ${hInView ? "on" : ""}`} style={{
            color: "var(--wm)", fontSize: ".8rem", lineHeight: 1.95, fontWeight: 300, marginBottom: 40,
          }}>
            Cada família olfativa transmite códigos sociais precisos. Entender a linguagem das fragrâncias é o primeiro passo para selecionar o instrumento certo para cada contexto de poder.
          </p>
          <div className={`rv d3 ${hInView ? "on" : ""}`} style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 8, height: 8, background: "var(--g)", transform: "rotate(45deg)" }} />
            <span className="slabel" style={{ fontSize: ".56rem" }}>Curadoria Especializada</span>
          </div>
        </div>

        <div style={{ paddingTop: 56 }}>
          {SCENTS.map((s, i) => <ScentBar key={s.label} {...s} delay={i * .14} />)}
          <div style={{
            marginTop: 36, padding: "22px 24px",
            border: "1px solid var(--gb)", background: "rgba(212,175,55,.02)",
          }}>
            <p className="sans" style={{
              color: "var(--wm)", fontSize: ".66rem", lineHeight: 1.85,
              fontStyle: "italic", fontWeight: 300,
            }}>
              "A assinatura química de uma fragrância amadeirada ativa centros cerebrais de confiança e credibilidade no interlocutor — um dado ignorado pela maioria dos executivos."
            </p>
            <div className="corm" style={{ color: "var(--g)", fontSize: ".82rem", marginTop: 10 }}>
              — Perfumaria de Poder, Coleção Bendito
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
