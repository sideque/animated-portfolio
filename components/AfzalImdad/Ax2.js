import { useEffect, useRef, useState } from "react";
import A from "./afzalImdadSVGs/A";

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`ai-afzal-imdad-parallax ${className}`}
  >
    <SVG />
  </div>
);

// Compact placeholder glyph to avoid oversized rendering while keeping the same contract
const PlaceholderGlyph = ({ label }) => (
  <svg version="1.2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="500" height="500">
    <g fill="inherit">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="520" fontFamily="sans-serif">{label}</text>
    </g>
    <path fill="none" d="m0 0h1000v1000h-1000z"/>
  </svg>
);

const X = () => <PlaceholderGlyph label="x" />;
const Two = () => <PlaceholderGlyph label="2" />;

export default function Ax2() {
  const ref = useRef();
  const [mount, handleMount] = useState(true);

  useEffect(() => {
    // Ensure visible immediately inside preloader
    handleMount(true);
  }, []);

  const letters = [
    { key: "A", Comp: A, className: "ai_svg_A" },
    { key: "x", Comp: X, className: "ai_svg_x" },
    { key: "2", Comp: Two, className: "ai_svg_2" },
  ];

  return (
    <div ref={ref} className={`ai-afzal-imdad ai-ax2 ${mount ? 'ai-afzal-imdad-visible' : ''}`} style={{ color: '#000' }}>
      {letters.map(({ key, Comp, className }) => (
        <SvgWrapper key={key} className={className} SVG={Comp} />
      ))}
    </div>
  );
}


