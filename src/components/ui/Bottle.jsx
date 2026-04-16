export const Bottle = ({ scale = 1, glow = false, label = "NO. 01", opacity = 1 }) => (
  <svg
    width={180 * scale} height={290 * scale}
    viewBox="0 0 180 290"
    fill="none"
    style={{ opacity }}
  >
    {glow && (
      <ellipse cx="90" cy="220" rx="60" ry="12"
        fill="rgba(212,175,55,.12)" />
    )}
    <rect x="76" y="36" width="28" height="6" rx="3"
      fill="var(--c2)" stroke="var(--g)" strokeWidth=".6" />
    <rect x="80" y="42" width="20" height="8" rx="1"
      fill="var(--c2)" stroke="var(--g)" strokeWidth=".5" />
    <rect x="82" y="50" width="16" height="16" rx="1"
      fill="var(--c2)" stroke="var(--g)" strokeWidth=".5" />
    <path d="M66 66 Q52 80 50 104 L50 214 Q50 232 68 238 L112 238 Q130 232 130 214 L130 104 Q128 80 114 66 Z"
      fill={glow ? "rgba(194,150,31,.2)" : "rgba(194,150,31,.1)"}
      stroke="var(--g)" strokeWidth="1.2" />
    <path d="M60 90 Q53 104 52 124 L52 180"
      stroke="rgba(255,255,255,.3)" strokeWidth="5" strokeLinecap="round" />
    <rect x="58" y="124" width="64" height="74" rx="1"
      fill="rgba(194,150,31,.08)"
      stroke="rgba(194,150,31,.75)" strokeWidth=".8" />
    <line x1="58" y1="142" x2="122" y2="142"
      stroke="rgba(212,175,55,.25)" strokeWidth=".5" />
    <line x1="58" y1="183" x2="122" y2="183"
      stroke="rgba(212,175,55,.25)" strokeWidth=".5" />
    <text x="90" y="158" textAnchor="middle"
      fill="var(--g)" fontSize="6.5"
      fontFamily="Cormorant Garamond, serif"
      letterSpacing="4" fontWeight="600">BENDITO</text>
    <text x="90" y="171" textAnchor="middle"
      fill="rgba(194,150,31,.9)" fontSize="4.5"
      fontFamily="Montserrat, sans-serif"
      letterSpacing="3" fontWeight="500">PERFUME</text>
    <text x="90" y="180" textAnchor="middle"
      fill="rgba(194,150,31,.8)" fontSize="4"
      fontFamily="Montserrat, sans-serif"
      letterSpacing="2.5" fontWeight="600">{label}</text>
    <ellipse cx="90" cy="238" rx="40" ry="6"
      fill="rgba(212,175,55,.12)" />
    <ellipse cx="90" cy="276" rx="54" ry="7"
      fill="rgba(32,28,23,.12)" />
  </svg>
);
