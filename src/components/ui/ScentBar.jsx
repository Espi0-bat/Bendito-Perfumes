import { useInView } from "../../hooks/useInView";

export const ScentBar = ({ label, pct, descriptor, delay = 0 }) => {
  const [ref, inView] = useInView(.2);
  return (
    <div ref={ref} style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
        <div style={{ display: "flex", gap: 18, alignItems: "baseline" }}>
          <span className="corm" style={{ color: "var(--w)", fontSize: "1.05rem", letterSpacing: ".04em" }}>{label}</span>
          <span className="sans" style={{ color: "var(--wm)", fontSize: ".62rem", letterSpacing: ".1em", fontWeight: 300 }}>{descriptor}</span>
        </div>
        <span className="corm" style={{ color: "var(--g)", fontSize: ".88rem" }}>{pct}%</span>
      </div>
      <div className="sbar">
        <div className="sbar-fill" style={{
          width: inView ? `${pct}%` : "0%",
          transition: `width 1.5s cubic-bezier(.16,1,.3,1) ${delay}s`,
        }} />
      </div>
    </div>
  );
};
