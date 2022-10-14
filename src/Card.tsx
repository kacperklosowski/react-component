import React from "react";

import Pie from './Pie';

import "./Card.scss";

interface CardProps {
  title: string;
  color: string;
  number: number;
  // description: string;
  increase: boolean;
  change: number;
  // period: string;
  // // children: React.ReactNode;
}

export default function Card({
  title,
  color,
  number,
  // description,
  increase = true,
  change,
  // period,
}: CardProps) {
  return (
    <div className="dashboard_card">
      <p>Dupa</p>
      <div className="card_data">
        <h5 className="card_title">{title}</h5>
        <h3 className="card_description">{number}</h3>
        <p className="card_change--growth">{increase ? '▲' : '▼'  } {change} from last week</p>
      </div>
      <div className="card_circle">
        <Pie percentage={50} color={color} />
      </div>
    </div>
  );
}