import { useInView } from "../../hooks/useInView";

export const XCard = ({ num, title, text, delay = 0 }) => {
  const [ref, inView] = useInView(.12);
  return (
    <div ref={ref} className={`xcard rv ${inView ? "on" : ""}`} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : "translateY(36px)",
      transition: `opacity .85s cubic-bezier(.16,1,.3,1) ${delay}s, transform .85s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>
      <div className="corm" style={{ color: "var(--g)", fontSize: "2rem", fontWeight: 300, opacity: .35, marginBottom: 18 }}>{num}</div>
      <h3 className="serif" style={{ color: "var(--w)", fontSize: "1.1rem", fontWeight: 600, marginBottom: 16, lineHeight: 1.3 }}>{title}</h3>
      <p className="sans" style={{ color: "var(--wm)", fontSize: ".73rem", lineHeight: 1.9, fontWeight: 300 }}>{text}</p>
    </div>
  );
};
