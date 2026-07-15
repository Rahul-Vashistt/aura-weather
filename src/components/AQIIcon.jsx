
export default function AQIIcon({ aqiRotation }) {

  return (
    <div className="relative w-15 h-15 -my-5 -mx-1">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* AQI Gradient */}
          <linearGradient id="aqiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />   {/* Green */}
            <stop offset="25%" stopColor="#84cc16" />  {/* Lime */}
            <stop offset="45%" stopColor="#eab308" />  {/* Yellow */}
            <stop offset="65%" stopColor="#f97316" />  {/* Orange */}
            <stop offset="82%" stopColor="#ef4444" />  {/* Red */}
            <stop offset="100%" stopColor="#9333ea" /> {/* Purple */}
          </linearGradient>
        </defs>

        {/* Gauge */}
        <path
          d="M15 70 A35 35 0 0 1 85 70"
          fill="none"
          stroke="url(#aqiGradient)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Needle */}
        <g
          className="origin-center transition-transform duration-300"
          style={{
            transform: `rotate(${aqiRotation}deg)`,
            transformOrigin: "50px 70px",
          }}
        >
          <line
            x1="50"
            y1="70"
            x2="50"
            y2="38"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Center Hub */}
        <circle
          cx="50"
          cy="70"
          r="4"
          className="fill-current"
        />
      </svg>
    </div>
  );
}