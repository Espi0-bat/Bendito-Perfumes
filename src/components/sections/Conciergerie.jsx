import { useInView } from "../../hooks/useInView";
import { SITE_CONFIG } from "../../config";

export const Conciergerie = () => {
  const [ref, inView] = useInView();

  const handleConsultoriaClick = () => {
    SITE_CONFIG.tracking.trackClick("Conciergerie_Whatsapp");
  };

  const handleColecaoClick = () => {
    SITE_CONFIG.tracking.trackClick("Conciergerie_Ver_Colecao");
  };

  const encodedMessage = encodeURIComponent(SITE_CONFIG.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodedMessage}`;

  return (
    <section className="pad-section grain" style={{
      padding: "140px 64px",
      background: "linear-gradient(135deg,#EAE0D5 0%,#F5EFE6 55%,#DFD3C3 100%)",
      position: "relative", overflow: "hidden", textAlign: "center",
    }}>
      <div className="cta-grid" />
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 900, height: 450, borderRadius: "50%",
        background: "radial-gradient(ellipse,rgba(212,175,55,.07) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />
      <div className="rule" style={{ position: "absolute", top: 0, left: 0, right: 0, marginTop: 0 }} />

      <div ref={ref} style={{ position: "relative", zIndex: 2 }}>
        <div className={`rv slabel ${inView ? "on" : ""}`} style={{ marginBottom: 26 }}>IV. Conciergerie Privée</div>

        <h2 className={`rv d1 serif ${inView ? "on" : ""}`} style={{
          fontSize: "clamp(2.4rem,5.5vw,5.2rem)", fontWeight: 700, lineHeight: 1.06,
          color: "var(--w)", marginBottom: 28,
        }}>
          Sua Assinatura Olfativa<br />
          <span className="shimmer">Começa Aqui</span>
        </h2>

        <p className={`rv d2 sans ${inView ? "on" : ""}`} style={{
          color: "var(--wm)", fontSize: ".82rem", lineHeight: 1.95,
          fontWeight: 300, maxWidth: 480, margin: "0 auto 56px",
        }}>
          Nossos curadores olfativos analisam seu perfil profissional, contextos de atuação e objetivos de imagem para selecionar as fragrâncias exatas para sua trajetória.
        </p>

        <div className={`rv d3 ${inView ? "on" : ""}`} style={{
          display: "flex", gap: 18, justifyContent: "center", alignItems: "center", flexWrap: "wrap",
        }}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} onClick={handleConsultoriaClick}>
            <button className="btn-gold">
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Consultoria de Fragrância Privada
              </span>
            </button>
          </a>
          <button className="btn-ghost" onClick={handleColecaoClick}>Ver Coleção Completa</button>
        </div>

        <div className="sans" style={{
          color: "var(--wd)", fontSize: ".56rem", letterSpacing: ".18em",
          marginTop: 48, textTransform: "uppercase",

        }}>
          Atendimento Exclusivo · Brasília & Envio Nacional · Por Ordem de Chegada
        </div>
      </div>
    </section>
  );
};
