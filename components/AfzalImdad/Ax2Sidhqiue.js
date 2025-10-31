import { useEffect, useRef, useState } from "react";
import A from "./afzalImdadSVGs/A";
import H from "./afzalImdadSVGs/H";
import U from "./afzalImdadSVGs/U";

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`ai-afzal-imdad-parallax ${className}`}
  >
    <SVG />
  </div>
);

// Placeholder glyphs for letters we don't have custom SVGs for yet
const Glyph = ({ label }) => (
  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
    <g fill="currentColor">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="520" fontFamily="sans-serif">{label}</text>
    </g>
    <path fill="none" d="m0 0h1000v1000h-1000z"/>
  </svg>
);

const X = () => <Glyph label="x" />;
const Two = () => <Glyph label="2" />;
const S = () => <Glyph label="S" />;
const s = () => <Glyph label="s" />;
const I = () => <Glyph label="i" />;
const D = () => <Glyph label="d" />;
const Q = () => <Glyph label="q" />;
const E = () => <Glyph label="e" />;

export default function Ax2Sidhqiue() {
  const ref = useRef();
  const [mount, setMount] = useState(true);

  useEffect(() => {
    setMount(true);
  }, []);

  const letters = [
    // { key: "A", Comp: A, className: "ai_svg_A" },
    { key: "x", Comp: X, className: "ai_svg_x" },
    { key: "2", Comp: Two, className: "ai_svg_2" },
    { key: "S", Comp: S, className: "ai_svg_S" },
    { key: "i", Comp: I, className: "ai_svg_i" },
    // { key: "d", Comp: D, className: "ai_svg_d" },
    // { key: "h", Comp: H, className: "ai_svg_H" },
    // { key: "q", Comp: Q, className: "ai_svg_q" },
    // { key: "i2", Comp: I, className: "ai_svg_i2" },
    // { key: "u", Comp: U, className: "ai_svg_U" },
    // { key: "e", Comp: E, className: "ai_svg_e" },
  ];

  return (
    <div ref={ref} className={`ai-afzal-imdad ai-ax2sidh ${mount ? 'ai-afzal-imdad-visible' : ''}`} style={{ color: '#000' }}>
      {letters.map(({ key, Comp, className }) => (
        <SvgWrapper key={key} className={className} SVG={Comp} />
      ))}
    </div>
  );
}


