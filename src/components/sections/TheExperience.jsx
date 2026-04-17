import { useInView } from "../../hooks/useInView";
import { XCard } from "../ui/XCard";

export const TheExperience = () => {
  const [hRef, hInView] = useInView();
  return (
    <section className="pad-section" style={{ padding: "120px 64px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: -200, right: -200,
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(212,175,55,.04) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />
      <div className="gold-glow-orb mobile-only" style={{ width: 400, height: 400, bottom: "-100px", right: "-100px" }} />
      <div className="rule" />

      <div ref={hRef} style={{ paddingTop: 72 }}>
        <div className={`rv slabel ${hInView ? "on" : ""}`} style={{ marginBottom: 60 }}>III. Manifesto Olfativo</div>

        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div className={`rv d1 corm ${hInView ? "on" : ""}`} style={{ color: "var(--g)", fontSize: ".72rem", letterSpacing: ".32em", marginBottom: 28, opacity: .65 }}>
            ✦ ✦ ✦
          </div>
          <h2 className={`rv d2 serif ${hInView ? "on" : ""}`} style={{
            fontSize: "clamp(1.9rem,4vw,3.8rem)", fontWeight: 400, lineHeight: 1.22,
            color: "var(--w)", marginBottom: 12, fontStyle: "italic",
          }}>
            "A reunião começa antes de você falar.<br />
            Começa no instante em que{" "}
            <span style={{ color: "var(--g)" }}>você entra na sala."</span>
          </h2>
        </div>

        <div className="col3 grid-border" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 80 }}>
          <XCard delay={0}    num="01" title="A Primeira Impressão"    text="Pesquisas em neurociência comportamental indicam que o olfato ativa memórias e julgamentos em menos de 200 milissegundos — antes de qualquer aperto de mão ou palavra dita." />
          <XCard delay={.14} num="02" title="A Marca Pessoal Invisível" text="Líderes de alto impacto cultivam uma assinatura olfativa consistente. Seus interlocutores associam inconscientemente a fragrância à autoridade e competência do portador." />
          <XCard delay={.28} num="03" title="O Investimento Estratégico" text="Um frasco de perfume premium custa menos que um almoço de negócios. O retorno, porém, é mensurável em cada reunião, negociação e apresentação realizada." />
        </div>
      </div>
    </section>
  );
};
