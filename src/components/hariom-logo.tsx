import React from "react";

export function HariomLogo({
  className = "h-12 w-auto",
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Main HARIOM wordmark with fork/spoon O logo */}
      <div className="flex items-center gap-0.5 font-black tracking-tighter text-2xl md:text-3xl font-sans uppercase">
        <span className="text-[#E52320] font-black tracking-tight">HARI</span>
        {/* Custom Fork & Spoon Circle "O" */}
        <div className="relative w-7 h-7 md:w-8 md:h-8 my-auto flex-shrink-0 mx-0.5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Top semicircle Red with Fork */}
            <path d="M 50,50 L 2,50 A 48,48 0 0,1 98,50 Z" fill="#E52320" />
            {/* Bottom semicircle Black with Spoon */}
            <path d="M 50,50 L 98,50 A 48,48 0 0,1 2,50 Z" fill="#1A1A1A" />
            {/* Center line separator */}
            <line x1="2" y1="50" x2="98" y2="50" stroke="#FFFFFF" strokeWidth="2" />
            {/* White Fork in top half */}
            <path
              d="M 38,18 V 32 M 46,15 V 32 M 54,15 V 32 M 62,18 V 32 M 38,32 C 38,39 62,39 62,32 V 32 H 50 V 46"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* White Spoon in bottom half */}
            <path
              d="M 50,54 V 84 M 50,54 C 41,54 41,70 50,70 C 59,70 59,54 50,54 Z"
              stroke="#FFFFFF"
              strokeWidth="3"
              fill="#FFFFFF"
            />
          </svg>
        </div>
        <span className="text-[#E52320] font-black tracking-tight">M</span>
      </div>

      {/* Caterers tagline frame */}
      {showTagline && (
        <div className="w-full flex items-center justify-center gap-1 mt-0.5 border-t border-b border-black/80 py-0.5 px-2">
          <div className="w-1 h-1 rounded-full bg-black shrink-0" />
          <span className="text-[10px] md:text-[11px] font-bold text-[#1A1A1A] tracking-[0.25em] uppercase font-sans">
            caterers
          </span>
          <div className="w-1 h-1 rounded-full bg-black shrink-0" />
        </div>
      )}
    </div>
  );
}

// Data URI string version for SVG image source (used in html2canvas / img tags)
export const HARIOM_LOGO_SVG_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="320" height="100">
  <rect width="320" height="100" fill="none"/>
  <text x="10" y="55" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="52" fill="#E52320" letter-spacing="-1">HARI</text>
  <g transform="translate(150, 12)">
    <path d="M 40,40 L 2,40 A 38,38 0 0,1 78,40 Z" fill="#E52320"/>
    <path d="M 40,40 L 78,40 A 38,38 0 0,1 2,40 Z" fill="#1A1A1A"/>
    <line x1="2" y1="40" x2="78" y2="40" stroke="#FFFFFF" stroke-width="2"/>
    <path d="M 30,12 V 25 M 37,10 V 25 M 43,10 V 25 M 50,12 V 25 M 30,25 C 30,32 50,32 50,25 V 25 H 40 V 38" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 40,42 V 68 M 40,42 C 32,42 32,56 40,56 C 48,56 48,42 40,42 Z" stroke="#FFFFFF" stroke-width="2.5" fill="#FFFFFF"/>
  </g>
  <text x="238" y="55" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="52" fill="#E52320" letter-spacing="-1">M</text>
  <line x1="10" y1="68" x2="310" y2="68" stroke="#1A1A1A" stroke-width="2.5"/>
  <circle cx="15" cy="80" r="3" fill="#1A1A1A"/>
  <text x="160" y="86" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="18" fill="#1A1A1A" letter-spacing="8" text-anchor="middle">caterers</text>
  <circle cx="305" cy="80" r="3" fill="#1A1A1A"/>
  <line x1="10" y1="92" x2="310" y2="92" stroke="#1A1A1A" stroke-width="2.5"/>
</svg>
`)}`;
