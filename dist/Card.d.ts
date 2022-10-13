/// <reference types="react" />
import "./Card.scss";
interface CardProps {
    title: string;
    color: string;
    number: number;
    increase: boolean;
    change: number;
}
export default function Card({ title, color, number, increase, change, }: CardProps): JSX.Element;
export {};
