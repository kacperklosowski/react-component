

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

var React = require('react');

var cleanPercentage = function (percentage) {
    var tooLow = !Number.isFinite(+percentage) || percentage < 0;
    var tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};
var Circle = function (_a) {
    var color = _a.color, percentage = _a.percentage;
    var r = 30;
    var circ = 2 * Math.PI * r;
    var strokePct = percentage ? ((100 - percentage) * circ) / 100 : '';
    console.log("🚀 ~ file: Pie.tsx ~ line 17 ~ Circle ~ strokePct", strokePct);
    return (React.createElement("circle", { r: r, cx: 100, cy: 100, fill: "transparent", stroke: strokePct !== circ ? color : "", strokeWidth: "0.3rem", strokeDasharray: circ, strokeDashoffset: percentage ? strokePct : 0, strokeLinecap: "round" }));
};
var Text = function (_a) {
    var percentage = _a.percentage;
    return (React.createElement("text", { x: "50%", y: "50%", dominantBaseline: "central", textAnchor: "middle", fontSize: "1em" },
        percentage.toFixed(0),
        "%"));
};
var Pie = function (_a) {
    var percentage = _a.percentage, color = _a.color;
    var pct = cleanPercentage(percentage);
    return (React.createElement("svg", { width: 100, height: 100 },
        React.createElement("g", { transform: "rotate(-90 ".concat("50 100", ")") },
            React.createElement(Circle, { color: "lightgrey" }),
            React.createElement(Circle, { color: color, percentage: pct })),
        React.createElement(Text, { percentage: pct })));
};

___$insertStyle("@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap\");\n.dashboard_card {\n  display: flex;\n  flex-direction: row;\n  font-family: \"Lato\", sans-serif;\n  background-color: #FFFFFF;\n  width: 380px;\n  height: 80px;\n  padding: 10px;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n}\n.dashboard_card .card_data {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.dashboard_card .card_data .card_title {\n  margin: 0 0 5px;\n  color: #67707C;\n  font-weight: 400;\n  font-size: 14px;\n}\n.dashboard_card .card_data .card_description {\n  margin: 0 0 5px;\n  color: #3B4A56;\n  font-weight: 700;\n  font-size: 22px;\n}\n.dashboard_card .card_data .card_change--decline, .dashboard_card .card_data .card_change--growth {\n  margin: 0;\n  font-size: 14px;\n}\n.dashboard_card .card_data .card_change--growth {\n  color: #5CB85C;\n}\n.dashboard_card .card_data .card_change--decline {\n  color: #D9534F;\n}\n.dashboard_card .card_circle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}");

function Card(_a) {
    var title = _a.title, color = _a.color, number = _a.number, 
    // description,
    _b = _a.increase, 
    // description,
    increase = _b === void 0 ? true : _b, change = _a.change;
    return (React.createElement("div", { className: "dashboard_card" },
        React.createElement("div", { className: "card_data" },
            React.createElement("h5", { className: "card_title" }, title),
            React.createElement("h3", { className: "card_description" }, number),
            React.createElement("p", { className: "card_change--growth" },
                increase ? '▲' : '▼',
                " ",
                change,
                " from last week")),
        React.createElement("div", { className: "card_circle" },
            React.createElement(Pie, { percentage: 50, color: color }))));
}

exports.Card = Card;
//# sourceMappingURL=index.js.map
