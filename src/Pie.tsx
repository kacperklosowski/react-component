import React from "react";

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

interface CircleProps {
  color: string;
  percentage?: number;
}
const Circle = ({ color, percentage}: CircleProps) => {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const strokePct = percentage ? ((100 - percentage) * circ) / 100 : '';
  console.log("🚀 ~ file: Pie.tsx ~ line 17 ~ Circle ~ strokePct", strokePct)
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.3rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

interface TextProps {
  percentage: number;
}

const Text = ({ percentage }: TextProps) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize="1em"
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

interface PieProps {
  percentage: number;
  color: string;
}

const Pie = ({ percentage, color }: PieProps) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={100} height={100}>
      <g transform={`rotate(-90 ${"50 100"})`}>
        <Circle color="lightgrey" />
        <Circle color={color} percentage={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

export default Pie;